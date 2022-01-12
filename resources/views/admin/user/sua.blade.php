@extends('admin.layout.index')

@section('content')
<div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-2" ></div>
                            <div class="col-lg-7" style="padding-bottom:20px">
                                <h1 class="page-header">Người Dùng
                                    <small>: {{ $user->name }}</small>
                                </h1>
                            </div>
                        </div>
                       
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-lg-2" ></div>
                    <div class="col-lg-7" style="padding-bottom:120px">
                        @if(count($errors) > 0)
                            <div class="alert alert-danger">
                                @foreach($errors->all() as $err)
                                    <strong>{{ $err }}</strong><br/>                          
                                @endforeach
                            </div>
                        @endif

                        @if(session('message'))
                            <div class="alert alert-success">
                                <strong>{{ session('message') }}</strong>
                            </div>
                        @endif
                        <form action="{{ $user->id }}" method="POST">
                            {{ csrf_field() }}
                            <div class="form-group">
                                <p><label>Tên Người Dùng</label></p>
                                <input class="form-control input-width" type="text" name="name" placeholder="Nhập tên người dùng" value="{{ $user->name }}" />
                            </div>

                            <div class="form-group">
                                <p><label>Email</label></p>
                                <input class="form-control input-width" type="email" name="email" placeholder="Nhập địa chỉ Email" value="{{ $user->email }}" />
                            </div>

                            <div class="form-group">
                                <p><label>Số điện thoại</label></p>
                                <input class="form-control input-width" type="text" name="phone" placeholder="Nhập số điện thoại" value="{{ $user->phone }}" />
                            </div>

                            <div class="form-group">
                                <p><label>Tình trạng</label></p>
                                <label class="radio-inline">
                                    <input class="mr-1" name="status" value="0"
                                    @if($user->status == 0)
                                        {{ 'checked' }}
                                    @endif
                                     type="radio">Mới đăng ký
                                </label>
                                <label class="radio-inline ml-3">
                                    <input class="mr-1" name="status" value="1" 
                                    @if($user->status == 1)
                                        {{ 'checked' }}
                                    @endif
                                     type="radio">Đã support
                                </label>
                            </div>

                            <div class="form-group">
                                <p><label>Ghi chú</label></p>
                                <input class="form-control input-width" type="text" name="description" placeholder="Ghi chú" value="{{ $user->description }}" />
                            </div>

                            <button type="submit" class="btn btn-info">Update</button>
                        <form>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
@endsection