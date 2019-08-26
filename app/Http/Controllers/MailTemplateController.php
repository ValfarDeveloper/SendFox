<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EmailTemplate;

class MailTemplateController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mailTemplates = EmailTemplate::paginate(10);

        return view('content.mailTemplates.mailTemplates', [
            'mailTemplates' => $mailTemplates
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $javascriptCreateVars = $this->getCreateJavascriptVars();

        return view('content.mailTemplates.createMailTemplate', [
            'javascriptBackVars' => $javascriptCreateVars
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $requestData = $request->all();
        $dataToSave = [
            'subject' => $requestData['emailTemplateSubject'],
            'body' => json_encode($requestData['emailTemplateBody'])
        ];
        $savedEmailTemplate = EmailTemplate::create($dataToSave);

        return response()->json($savedEmailTemplate);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Get all the javascript variables used by the frontend in the create route
     * @return array
     */
    private function getCreateJavascriptVars(){
        return [
            'storeMailTemplateRoute' => route('mail-templates.store')
        ];
    }
}