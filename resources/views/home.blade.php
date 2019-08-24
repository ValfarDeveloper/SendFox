@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif
        <div id="home-content">
        </div>
    </div>
</div>
@endsection

@push('scripts')
    <script src="{{ mix('js/components/HomeContent.js') }}"></script>
@endpush