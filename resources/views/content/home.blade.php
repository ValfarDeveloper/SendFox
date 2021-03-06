@extends('layouts.app')

@section('content')
    <div class="justify-content-center h-100">
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif
        <div id="home-content" class="d-flex justify-content-center h-100">
        </div>
    </div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{mix('css/components/HomeContent.css')}}">
@endpush

@push('scripts')
    <script>
        var javascriptBackVars = {!! json_encode($javascriptBackVars, JSON_HEX_TAG) !!};
    </script>
    <script src="{{ mix('js/components/HomeContent.js') }}"></script>
@endpush