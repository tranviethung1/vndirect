var url_login, formLogin, tracker, cookiesUtils;

//===================================================================================

//ON LOAD
$(document).ready(function () {
    initView();
    tracker.initTracking(formLogin.username(), vndaName, vndaTrackerName);
});

function initView() {
    url_login = BASE_URL + "/login";
    formLogin = new login();
    tracker = new HappyEnding();
    cookiesUtils = new CookiesUtils();

    var $btnLogin = $('#btn-login');
    var $btnRegister = $('#btn-register');
    var $divShowPassword = $('#show-password');

    $btnRegister.on('click', function (e) {
    	window.location.href = $('#btn-register').attr('value');
        /*var currentUrl = window.location;
        var urlParam = $.urlParam('url', currentUrl);
        if (urlParam) {
            window.location.href = '//accounts.vndirect.com.vn/?url=' + urlParam;
        } else {
            window.location.href = '//accounts.vndirect.com.vn/';
        }*/
        return false;
    });

    $divShowPassword.on('click', function (e) {
        $("i", this).toggleClass("fa-eye fa-eye-slash");
        if ($('#password').prop('type') === "password") {
            $('#password').prop('type', "text");
        } else {
            $('#password').prop('type', "password");
        }
    });

    $btnLogin.on('click', function (e) {
        loginVnd();
        return false;
    });

    $('#username').keypress(function (event) {
        if (event.keyCode == 13 || event.which == 13) {
            $('#password').focus();
        }
    });

    $('#password').keypress(function (event) {
        if (event.keyCode == 13 || event.which == 13) {
            loginVnd();
        }
    });
}

function loginVnd() {
    if (formLogin.validate().length !== 0) {
        Notify.error(formLogin.error);
        return;
    }

    if ($('#btn-login').find($(".fa")).hasClass('fa-sign-in')) {
        $('#btn-login').find($(".fa")).removeClass('fa-sign-in').addClass('fa-spinner');
        $('#btn-login').prop('disabled', true);
    }

    $.ajax({
        type: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: url_login,
        data: formLogin.requestLogin()

    }).done(function (data) {
        tracker.track('authen', 'click', 'login success with username: ' + formLogin.username(), 1);

        var token = $.urlParam('token', data);
        var ref = $.urlParam(httpReferer, data);

        if (token && ref) {
            // cookiesUtils.setCookie(USERNAME_COOKIES, formLogin.username(), COOKIES_OPTIONS);
            // cookiesUtils.setCookie(TOKEN_ID_COOKIES, token, COOKIES_OPTIONS);
            window.location.href = ref + "?token-id=" + token;
        }
    }).fail(function (xhr) {
        tracker.error(this.url, this.type, xhr, "Login", 'login failed', formLogin.username());
        var error = [];
        error.push({message: "Tên đăng nhập hoặc mật khẩu không đúng!", id: "login-error"});
        Notify.error(error);

    }).always(function () {
        if ($('#btn-login').find($(".fa")).hasClass('fa-spinner')) {
            $('#btn-login').find($(".fa")).removeClass('fa-spinner').addClass('fa-sign-in');
            $('#btn-login').prop('disabled', false);
        }
    });
}

function login() {
    this.error = [];

    this.username = function () {
        return $('#username').val().trim()
    };
    this.password = function () {
        return $('#password').val()
    };
    this.url = function () {
        return $('#url').val()
    };

    this.setUsername = function (value) {
        $('#username').val(value)
    };
    this.setPass = function (value) {
        $('#password').val(value)
    };

    this.validate = function () {
        this.error = [];

        if (!this.username() && !this.password()) {
            this.error.push({message: Error_message.EMPTY_INPUT, id: "login-error"});
            return this.error;
        }

        if (!this.username()) {
            this.error.push({message: "Xin vui lòng nhập tên đăng nhập", id: "username-error"});
        }

        if (!this.password()) {
            this.error.push({message: "Xin vui lòng nhập mật khẩu", id: "password-error"});
        }

        return this.error;
    };

    this.requestLogin = function () {
        return {
            username: this.username(),
            password: this.password(),
            url: this.url()
        }
    }
}