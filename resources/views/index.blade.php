@extends('layouts.app')

@section('content')
    <div class="main-container flex-column">
        <div class="logo-container d-flex align-items-center justify-content-center flex-column">
            <i class="logo fab fa-phoenix-squadron"></i>
        </div>
        <h1>Welcome to SendFox!</h1>
    </div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{mix('css/index.css')}}">
@endpush