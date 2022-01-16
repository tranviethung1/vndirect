<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dashboard</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{asset('adminlte/plugins/fontawesome-free/css/all.min.css')}}">
    <!-- Ionicons -->
    <!-- Tempusdominus Bbootstrap 4 -->
    <!-- iCheck -->
    <!-- JQVMap -->
    <!-- Theme style -->
    <link rel="stylesheet" href="{{asset('adminlte/dist/css/adminlte.min.css')}}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{asset('adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
    <!-- Daterange picker -->
    <!-- summernote -->
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini layout-fixed">

<div id="wrapper">
    <div class="wrapper">
        <!-- Header -->
    @include('admin.layout.header')
    <!-- End Header -->
        <!-- Menu -->
    @include('admin.layout.menu')
    <!-- End Menu -->
        <!-- Page Content -->
    @yield('content')

    <!-- /.content-wrapper -->
        <footer class="main-footer">
            <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.0.4
            </div>
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- End Page Content -->
    </div>
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="{{asset('adminlte/plugins/jquery/jquery.min.js')}}"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{asset('adminlte/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button)
</script>
<script>
    var url = window.location;
    const allLinks = document.querySelectorAll('.nav-item a');
    const currentLink = [...allLinks].filter(e => {
        return e.href == url;
    });
    if (currentLink.length) {
        currentLink[0].classList.add("active")
        currentLink[0].closest(".nav-treeview").style.display="block";
        currentLink[0].closest(".has-treeview").classList.add("active");
    }

    var loadFile = function(event, nameIdChoose, nameIdPreview = false) {
        var output = document.getElementById(nameIdPreview);
        output.src = URL.createObjectURL(event.target.files[0]);
        let nameFile = event.target.files[0].name;
        $('#' + nameIdChoose).html(nameFile)
        output.onload = function() {
            URL.revokeObjectURL(output.src)
        }
    };
</script>

<script>
    $(".delete").click(function(){
        var id = $(this).data("id");
        var token = $(this).data("token");
        $.ajax(
        {
            url: "admin/user/delete/"+ id,
            type: 'DELETE',
            dataType: "JSON",
            data: {
                "id": id,
                "_method": 'DELETE',
                "_token": token,
            },
            success: function ()
            {
                const { value: accept } = Swal.fire({
                        title: 'Xóa thành công',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result['isConfirmed']){
                            window.location.href = "/admin";
                        }
                    });
                $("tr[data-id='" + id +"']").remove();

            }
        });
    });
</script>
@yield('scripts')
</body>
</html>
<style>
#header .list-inline.check_api_div {
    letter-spacing:normal;
    font-weight:900;
}
</style>
