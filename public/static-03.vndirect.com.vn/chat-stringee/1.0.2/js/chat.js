document.addEventListener("DOMContentLoaded", function (e) {
    var x = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.vnd_chatbox_iframe_wrapper.open{border-radius: 10px;width: 380px;height: 580px;margin-bottom: 15px;box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;}.vnd_chatbox_iframe_wrapper{bottom: 0;right: 0;margin-top:0;margin-right:0;margin-bottom:0;padding:0;display:block;background:transparent;position:fixed;z-index:16000000;width:85px;height:85px;box-sizing: content-box}.vnd_chatbox_iframe_wrapper .vnd_iframe{background-color:transparent;vertical-align:text-bottom;position:relative;width:100%;height:100%;min-width:100%;min-height:100%;max-width:100%;max-height:100%;margin:0;overflow:hidden;display:block;border-width:0}.drop-down-rectangle1{position:absolute;width:15px;height:15px;background:#FFF;transform:rotate(45deg);top:-5px;right:35px;border:1px solid #E9EBED} .vnd_chatbox_iframe_wrapper.open .vnd-header-stringee-chat{height:40px;width:calc(100% - 70px);position:absolute;z-index:1000;cursor:pointer;}@media (max-width: 576px) { .vnd_chatbox_iframe_wrapper.open {width: 100%; height: 100%; margin-bottom: 0px;}}';
    x.appendChild(style);

    getContentIframe = function (iframe_html) {
        var div = document.createElement("div");
        div.setAttribute('class', 'vnd_chatbox_iframe_wrapper');
        div.setAttribute('id', 'vnd_chatbox_iframe_wrapper');
        var header = document.createElement('div');
        header.setAttribute('class', 'vnd-header-stringee-chat');
        div.appendChild(header);
        var iframe = document.createElement('iframe');
        iframe.setAttribute('class', 'vnd_iframe');
        iframe.setAttribute('id', 'vndChatIframe');
        div.appendChild(iframe);
        document.body.appendChild(div);
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(iframe_html);
        iframe.contentWindow.document.close();
    };
    var html = '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '    <meta charset="UTF-8">' +
        '    <title>Title</title>' +
        '    <link rel="stylesheet" href="https://static-01.vndirect.com.vn/chat-stringee/1.0.2/css/style.css">' +
        '    <script type="text/javascript" src="https://static-01.vndirect.com.vn/chat-stringee/1.0.2/js/function.js" charset="UTF-8"></script>' +
        '</head>' +
        '<body>' +
        '<div class="container">' +
        '    <div class="row">' +
        '        <div id="VndSmallchat">' +
        '            <div id="VndChatHeader">' +
        '                <span>' +
        '                    Welcome' +
        '                </span>' +
        '                <span class="close_chat_icon" onclick="hideCloseChatBox()">X</span>' +
        '            </div>' +
        '            <div id="vnd_chatBody">' +
        '            </div>' +
        '        </div>' +
        '        <div id="vnd_chat_on" class="vnd_chat_on" onclick="onShowChatBox()">' +
        '            <img style="padding: 5px" src="https://img.vndirect.com.vn/imgview/nhan-ha/chat-icon-574.png"/>' +
        '        </div>' +
        '    </div>' +
        '</div>' +
        '</body>' +
        '</html>';
    getContentIframe(html);
});