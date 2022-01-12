@extends('admin.layout.index')

@section('content')
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-12" style="margin-top:5rem">
                    <div class="card">
                        <div class="card-body">
                        <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th class="text-center">Status</th>
                      <th>Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    @foreach ($users as $key => $user)
                        <tr class="item-table" data-id="{{$user->id}}">
                            <td>{{$user->id}}</td>
                            <td>{{ $user->name }}</td>
                            <td>
                                {{ $user->email }}
                            </td>
                            <td> {{ $user->phone }}</td>
                            <td class="text-center"> <i class="{{ $user->status === 0 ? 'far fa-square text-warning' : 'fas fa-check-square text-success'}}"></i></td>
                            <td > {{ $user->description}}</td>
                            <td class="text-center" style="font-size:21px; ">
                                <a href="admin/edit/{{$user->id}}">
                                    <i class="fa fa-edit" style="color:green; cursor:pointer" data-toggle="modal" data-target="#editModal{{$user->id}}"></i>
                                </a>
                                <i class="ml-5 fas fa-trash-alt text-danger delete" data-id="{{ $user->id }}" data-token="{{ csrf_token() }}"></i>
                            </td>
                        </tr>
                    @endforeach
                  </tbody>
                </table>
                        </div>

                    </div>
                </div>
                <div class="">
                    <ul class="pagination pagination-sm m-0 float-right">
                        {{ $users->links() }}
                    </ul>
                </div>
                <!--/.col (right) -->
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
        <!-- /.content -->
    </div>
    <style>
        .pagination{
            margin-left: 50%;
        }
        .pagination li{
            border: 1px solid #ddd;
            padding: 0.5rem 1rem!important;
            background:white
        }
        .pagination li a {
        }
    </style>
    <!-- /.control-sidebar -->
 
@endsection