<?php

namespace App\Http\Controllers\Api;

use App\Models\Game;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GameController extends Controller
{
    public function index()
    {
        // return Game::all();
        return response()->json(Game::all());

    }

    public function show($id)
    {
        return Game::findOrFail($id);
    }

    public function getByCategory($category)
    {
        return Game::where('category', $category)->get();
    }

    public function getTrending()
    {
        return Game::inRandomOrder()->limit(4)->get();
    }


    // app/Http/Controllers/Api/GameController.php
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'price' => 'required|numeric',
        'category' => 'required|string',
        'image' => 'required|string',
        'genre' => 'required|string',
        'description' => 'required|string',
    ]);

    $game = Game::create($validated);

    return response()->json($game, 201);
}
}
