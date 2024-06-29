<?php

namespace App\Http\Controllers;

use App\Models\NewTaskApi;
use Illuminate\Http\Request;

class NewTaskApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(['data' => NewTaskApi::get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newTaskApi = new NewTaskApi;
        $newTaskApi->firstname = $request->firstname;
        $newTaskApi->lastname = $request->lastname;
        $newTaskApi->email = $request->email;
        $newTaskApi->phone = $request->phone;

        $newTaskApi->save();
        return response()->json([
            'message' => 'post created',
            'status' => 'success',
            'data' => $newTaskApi
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(NewTaskApi $newTaskApi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewTaskApi $newTaskApi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewTaskApi $newTaskApi)
    {
        //
    }
}
