@extends('layouts.app')

@section('content')
<div class="justify-content-center">
    <div id="mail-templates" class="d-flex align-items-center flex-column">
        @foreach($mailTemplates as $mailTemplate)
            <div class="card mail-template mb-5">
                <div class="card-body">
                    <h4 class="card-title">Subject: {{ $mailTemplate->subject }}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">Id: {{ $mailTemplate->id }}</h5>
                    <div class="card-text body" data-body="{{ $mailTemplate->body }}"></div>
                </div>
            </div>
        @endforeach
        <div class="row pagination justify-content-center">
            {{ $mailTemplates->links() }}
        </div>
    </div>
</div>
@endsection

@push('styles')
    <link rel="stylesheet" href="{{mix('css/content/mailTemplates/mailTemplates.css')}}">
@endpush

@push('scripts')
    <script src="{{ mix('js/content/mailTemplates/mailTemplates.js') }}"></script>
@endpush