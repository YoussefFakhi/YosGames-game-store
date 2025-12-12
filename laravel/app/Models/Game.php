<?php
// app/Models/Game.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'price',
        'original_price',
        'category',
        'image',
        'genre',
        'description',
        'long_description',
        'features',
        'tags',
        'reviews'
    ];

    protected $casts = [
        'features' => 'json',
        'tags' => 'json'
    ];
}
