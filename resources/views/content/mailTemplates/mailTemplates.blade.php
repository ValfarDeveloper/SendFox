@extends('layouts.app')

@section('content')
<div class="justify-content-center">
    <div id="mail-templates">
        <div class="row table-row d-none d-md-flex">
            <div class="col-12 col-md-1 header-column">
                Id
            </div>
            <div class="col-12 col-md-4 header-column">
                Subject
            </div>
            <div class="col-12 col-md-7 header-column">
                Body
            </div>
        </div>
        @foreach($mailTemplates as $mailTemplate)
            <div class="row table-row">
                <div class="col-12 col-md-1 vertical-centered-column">
                    <span class="d-block d-md-none mobile-column-title">
                        Id:
                    </span>
                    {{ $mailTemplate->id }}
                </div>
                <div class="col-12 col-md-4 vertical-centered-column">
                    <span class="d-block d-md-none mobile-column-title">
                        Subject:
                    </span>
                    {{ $mailTemplate->subject }}
                </div>
                <div class="body col-12 col-md-7" data-body="{{ $mailTemplate->body }}">
                    <div class="d-flex d-md-none mobile-column-title">
                        Body:
                    </div>
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