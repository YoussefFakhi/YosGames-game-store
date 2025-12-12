<?php

use App\Http\Controllers\Api\GameController;

Route::apiResource('games', GameController::class);
Route::get('games/category/{category}', [GameController::class, 'getByCategory']);
Route::get('games/trending', [GameController::class, 'getTrending']);

// routes/api.php
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// routes/api.php
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
