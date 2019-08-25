<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $javascriptIndexVars = $this->getIndexJavascriptVars();
        
        return view('content.home', [
            'javascriptBackVars' => $javascriptIndexVars
        ]);
    }

    /**
     * Get all the javascript variables used by the frontend in the index route
     * @return array
     */
    private function getIndexJavascriptVars(){
        return [
            'createMailTemplateRoute' => route('mail-templates.create'),
            'indexMailTemplatesRoute' => route('mail-templates.index'),
        ];
    }
}
