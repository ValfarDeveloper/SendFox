@extends('layouts.app')

@section('content')
<div class="row h-100 w-100 mx-0 px-0">
    <div class="d-flex align-items-center col-md-3 h-100 mx-0 px-3 ml-md-5">
        <div class="card register-container w-100">
            <div class="logo-container d-flex align-items-center justify-content-center flex-column">
                <i class="logo fab fa-phoenix-squadron"></i>
                <div class="logo-text">Register</div>
            </div>
            <div class="card-body">
                <form class="register-form" method="POST" action="{{ route('register') }}">
                    @csrf

                    <div class="form-group row">
                        <div class="col-12">
                            <input id="name" type="text" placeholder="Name" class="form-input form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-12">
                            <input id="email" type="email" placeholder="E-mail" class="form-input form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-12">
                            <input id="password" type="password" placeholder="Password" class="form-input form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-12">
                            <input id="password-confirm" type="password" placeholder="Password confirmation" class="form-input form-control" name="password_confirmation" required autocomplete="new-password">
                        </div>
                    </div>

                    <div class="form-group row mt-5 justify-content-center">
                        <button type="submit" class="btn register-btn">
                            {{ __('Register') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{mix('css/auth/register.css')}}">
@endpush
