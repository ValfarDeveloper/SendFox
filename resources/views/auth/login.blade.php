@extends('layouts.app')

@section('content')
<div class="row h-100 w-100 mx-0 px-0">
    <div class="d-flex align-items-center col-md-3 h-100 mx-0 px-3 ml-md-5">
        <div class="card login-container w-100">
            <div class="card-body">
                <div class="logo-container d-flex align-items-center justify-content-center flex-column">
                    <i class="logo fab fa-phoenix-squadron"></i>
                    <div class="logo-text">Login</div>
                </div>
                <form class="login-form" method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="form-group row">
                        <div class="col-12">
                            <input id="email" type="email" placeholder="E-mail" class="form-input form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-12">
                            <input id="password" type="password" placeholder="Password" class="form-input form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row justify-content-end pr-3 py-3">
                        <div class="form-check d-flex align-items-center">
                            <input class="form-check-input checkbox-remember-me m-0 mr-2" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label" for="remember">
                                {{ __('Remember Me') }}
                            </label>
                        </div>
                    </div>

                    <div class="form-group row justify-content-center">
                        <button type="submit" class="btn login-btn">
                            {{ __('Login') }}
                        </button>
                    </div>
                    <div class="row justify-content-center">
                        @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{mix('css/auth/login.css')}}">
@endpush