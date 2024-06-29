<?php

use App\Http\Controllers\NewTaskApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('data',[NewTaskApiController::class, 'index']);
Route::post('data',[NewTaskApiController::class, 'store']);