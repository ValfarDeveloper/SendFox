@extends('layouts.app')

@section('content')
<div class="justify-content-center">
    <div id="create-mail-template"></div>
</div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{mix('css/components/MailTemplateForm.css')}}">
@endpush

@push('scripts')
    <script src="{{ mix('js/components/MailTemplateForm.js') }}"></script>
@endpush