$.urlParam = function (name, url) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
};

function loaderShow() {
    var loader = $('#vndLoader');
    if (loader.hasClass("d-none")) {
        loader.removeClass("d-none");
    }
}

function toJsonStringify(obj) {
    return !CommonValidate.isNullOrEmpty(obj) ? JSON.stringify(obj) : null;
}

function showError(xhr) {
    return "<p id='regError' class='text-danger'>error: "
        + ErrorCode[xhr.responseJSON.error] + " ("
        + xhr.responseJSON.id + ")" + "<br/>message: "
        + xhr.responseJSON.message + " ("
        + xhr.responseJSON.error + ")" + "<br/>description: "
        + xhr.responseJSON.description + "</p>";
}

function showErrorStatus(xhr) {
    return "<p id='regError' class='text-danger'>Vui lòng liên hệ bộ phận chăm sóc khách hàng để được hỗ trợ ("
        + xhr.status + ")</p>";
}

function loaderHide() {
    $('#vndLoader').addClass("d-none");
}

$(document).ready(function () {
    $(".dropdown").hover(
        function () {
            $('.m-dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
        },
        function () {
            $('.m-dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
        });

    loaderHide();
});

function focusToErrorFirst() {
    var error = $("[id^=error]").first().prev();
    $('html, body').animate({
        scrollTop: (error.offset().top - 200)
    }, 0);
    error.find('input').focus();

}