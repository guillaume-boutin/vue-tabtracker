<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $fillable = [
        'title',
        'artist',
        'genre',
        'album',
        'album_image_url',
        'youtube_id',
        'lyrics',
        'tab'
    ];
}
