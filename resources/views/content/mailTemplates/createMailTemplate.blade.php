@extends('layouts.app')

@section('content')
<div id="create-mail-template" class="d-flex justify-content-center align-items-center h-100">
</div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{mix('css/components/MailTemplateForm.css')}}">
@endpush

@push('scripts')
    <script src="{{ mix('js/components/MailTemplateForm.js') }}"></script>
@endpush