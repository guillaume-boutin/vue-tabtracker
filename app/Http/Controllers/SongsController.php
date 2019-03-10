<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Song;

class SongsController extends Controller
{
    public function index()
    {
        return ['songs' => Song::all()->toArray()];
    }
}
