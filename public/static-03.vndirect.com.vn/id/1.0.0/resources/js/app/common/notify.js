/**
 * Created by DoThanhTung on 2/26/18.
 */

var Notify = (function ($) {
    var _ok, _fail, _error, _errorElement, _warning, _cleanError, _cleanErrorElement, _confirm, _dialogOk, _dialogError,
        icon_check = "<img width='30px' src='/resources/images/icon-check.png'>&nbsp;",
        icon_error = "<img width='42px' src='/resources/images/icon-error.png'>",

        _ok = function (title, message, callback) {
            var noti = bootbox.alert({
                title: "<strong><img width='30px' src='/resources/images/icon-check.png'> " + title + "</strong>",
                message: message,
                callback: callback,
                backdrop: true,
                buttons: {
                    ok: {
                        label: 'Xác nhận',
                        className: 'mainbtnpaydee'
                    }
                }
            });
            return noti;
        };

    _fail = function (title, message, callback) {
        var noti = bootbox.alert({
            title: "<strong><img  width='30px' src='/resources/images/icon-error.png'> " + title + "</strong>",
            message: message,
            callback: callback,
            backdrop: true,
            buttons: {
                ok: {
                    label: 'Xác nhận',
                    className: 'mainbtnpaydee hide'
                }
            }
        });
        return noti;
    };

    _error = function (array_error_obj) {
        $("[id^=error]").remove();
        if (array_error_obj.length == 0) {
            return;
        }

        for (var i = 0; i < array_error_obj.length; i++) {
            var font = "12px";
            var marginBottom = " mb-0";
            var textColor = "text-danger";
            var el_id = array_error_obj[i].id;
            var el_message = array_error_obj[i].message;
            if (el_message == undefined) {
                el_message = "Không kết nối được Server. Xin thử lại"
            }
            if (el_id.indexOf("alert") > -1) {
                font = "15px";
                $('#' + el_id).html("<div class='box-info' id='error" + el_id + "' style=' padding:5px; font-size:" + font + "'>"
                    + "<div class='col-xs-2 col-sm-2 col-md-2 padding-0 icon-error' style='text-align:center'>" + icon_error + "</div>"
                    + "<div class='col-xs-10 col-sm-10 col-md-10 padding-0'>"
                    + "<p style='float:none'><span style='color:#c9031c'>Thông báo</span><br>" + el_message + "</p></div>"
                    + "</div>");
                continue;
            } else {
                _cleanWarningElement(el_id);
                $('#' + el_id).after("<p id='error" + el_id + "' style='font-size:" + font + "' class='" + textColor + marginBottom + "'>" + el_message + "</p>")
            }
            if (i === 0) {
                $('html, body').animate({
                    scrollTop: ($('#' + el_id).offset().top - 200)
                }, 0);
                $('#' + el_id).children('input').focus();
            }
        }
    };

    _errorElement = function (obj, align) {
        if (CommonValidate.isNullOrEmpty(obj) || CommonValidate.isNullOrEmpty(obj.id)) {
            return;
        }
        var errorId = "error" + obj.id;
        $("#" + errorId).remove();
        _cleanWarningElement(obj.id);
        var className = "vnd-text-size-12 mb-0 text-danger ";
        className += align ? align : 'text-left';
        var el_id = obj.id;
        var el_message = obj.message;
        if (el_message == undefined) {
            el_message = "Không kết nối được Server. Xin thử lại"
        }
        $('#' + el_id).after("<p id='" + errorId + "' class='" + className + "'>" + el_message + "</p>")

    };

    _warning = function (array_error_obj) {
        $("[id^=error]").remove();
        if (array_error_obj.length == 0) {
            return;
        }

        for (i = 0; i < array_error_obj.length; i++) {
            var font = "12px";
            var marginBottom = " mb-0";
            var textColor = "text-warning";
            var el_id = array_error_obj[i].id;
            var el_message = array_error_obj[i].message;
            if (el_message == undefined) {
                el_message = "Không kết nối được Server. Xin thử lại"
            }
            if (el_id.indexOf("alert") > -1) {
                font = "15px";
                $('#' + el_id).html("<div class='box-info' id='error" + i + "' style=' padding:5px; font-size:" + font + "'>"
                    + "<div class='col-xs-2 col-sm-2 col-md-2 padding-0 icon-error' style='text-align:center'>" + icon_error + "</div>"
                    + "<div class='col-xs-10 col-sm-10 col-md-10 padding-0'>"
                    + "<p style='float:none'><span style='color:#c9031c'>Thông báo</span><br>" + el_message + "</p></div>"
                    + "</div>");
                continue;
            } else {
                $('#' + el_id).after("<p id='error" + i + "' style='font-size:" + font + "' class='" + textColor + marginBottom + "'>" + el_message + "</p>")
            }
        }
    };

    _warningElement = function (obj) {
        if (CommonValidate.isNullOrEmpty(obj) || CommonValidate.isNullOrEmpty(obj.id)) {
            return;
        }
        var warningId = "warning" + obj.id;
        $("#" + warningId).remove();
        var className = "vnd-text-size-12 mb-0 vnd-text-orange";
        var el_id = obj.id;
        var el_message = obj.message;
        if (el_message == undefined) {
            el_message = "Không kết nối được Server. Xin thử lại"
        }
        $('#' + el_id).after("<p id='" + warningId + "' class='" + className + "'>" + el_message + "</p>")

    };

    _cleanError = function () {
        $("[id^=error]").remove();
    };

    _cleanErrorElement = function (id) {
        var errorId = "error" + id;
        $("#" + errorId).remove();
    };

    _cleanWarningElement = function (id) {
        var warningId = "warning" + id;
        $("#" + warningId).remove();
    };

    _confirm = function (message, callback) {
        var noti = bootbox.confirm({
            message: message,
            callback: callback,
            buttons: {
                confirm: {
                    label: 'Xác nhận',
                    className: 'mainbtnpaydee'
                },
                cancel: {
                    label: 'Hủy bỏ',
                    className: 'subbtnpaydee'
                }
            }
        });
        return noti;
    };

    _dialogOk = function (message, time, callback) {
        var noti = bootbox.dialog({
            message: icon_check + message,
            closeButton: false
        });

        setTimeout(function () {
            bootbox.hideAll();
            if (callback) {
                callback();
            }
        }, time * 1000);
        return noti;
    };

    _dialogError = function (message, time, callback) {
        var noti = bootbox.dialog({
            message: icon_error + message,
            closeButton: false
        });

        setTimeout(function () {
            bootbox.hideAll();
            if (callback) {
                callback();
            }
        }, time * 1000);
        return noti;
    };

    return {
        ok: _ok,
        fail: _fail,
        error: _error,
        errorElement: _errorElement,
        warning: _warning,
        warningElement: _warningElement,
        cleanError: _cleanError,
        cleanErrorElement: _cleanErrorElement,
        cleanWarningElement: _cleanWarningElement,
        confirm: _confirm,
        dialogOk: _dialogOk,
        dialogError: _dialogError
    };

}(jQuery));