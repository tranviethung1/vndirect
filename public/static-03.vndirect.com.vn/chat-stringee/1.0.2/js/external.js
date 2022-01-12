function postData(data) {
    if (localStorage.getItem("initiateBot")) {
        initiateBot = localStorage.getItem("initiateBot")
    } else {
        initiateBot = 0;
    }
    var random = {
        showBot: 1,  // 1 =s how, 0 = hide
        customerType: data.customerType, // 1 = customer, 0 = lead
        listCustomerId: data.listCustomerId,
        customerName: data.customerName,
        queueId: "",
        initiateBot: initiateBot
    };
    localStorage.setItem("initiateBot", 1);
    sendMessage('' + JSON.stringify(random));
}

var sendMessage = function (msg) {
    var iframeEl = document.getElementById("stringeeChatIframe").contentWindow;
    message = msg;
    console.log('PRE POST MESSAGE STRINGEE', msg)
    iframeEl.postMessage(msg, '*');
}

function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}


bindEvent(window, 'message', function (e) {
    let _data = e.data;
    if (typeof _data === 'string' && _data !== null) {
        if (_data == "CONVERSATION_ENDED") {
            if(localStorage.getItem("globalData")) return;
            var iframe = document.getElementById("vndChatIframe");
            var element = iframe.contentWindow.document.getElementById("vnd_chat_on");
            element.setAttribute("style", "display:block");
            var stringee_iframe = document.getElementById("stringeeX_chatbox_iframe_wrapper");
            localStorage.clear();
            stringee_iframe.style.display = "none";
        } else if (_data == "MINIMIZE_CHAT") {
            var iframe = document.getElementById("stringeeChatIframe");
            var element = iframe.contentWindow.document.getElementsByClassName("chat_on")[0];
            element.setAttribute("style", "display:block");
        }
    }

    if (_data !== null && _data.type === 'VND') {
        postData(_data)
    }
})
