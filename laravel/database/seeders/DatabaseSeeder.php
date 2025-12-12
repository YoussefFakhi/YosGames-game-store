<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    // public function run(): void
    // {
    //     // User::factory(10)->create();

    //     User::factory()->create([
    //         'name' => 'Test User',
    //         'email' => 'test@example.com',
    //     ]);
    // }

    // database/seeders/DatabaseSeeder.php
// database/seeders/DatabaseSeeder.php
public function run()
{
    $this->call([
        UserSeeder::class,
        GameSeeder::class, // Your existing game seeder
    ]);
}
}






















// public function run()
// {
//     // Skip UserSeeder if you don't need test users
//     // $this->call(UserSeeder::class);

//     $this->call(GameSeeder::class);
// }
