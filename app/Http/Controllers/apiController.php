<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class apiController extends Controller
{
    public function formData(Request $request)
    {
        $xml = simplexml_load_file($request->url, 'SimpleXMLElement', LIBXML_NOCDATA);
        $data = xmlToArray($xml);
        return Response::json($data);
    }
}
