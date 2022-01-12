<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
    }
}

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        //
        DB::table('users')->insert([
                'name' => 'Admin',
                'email' => 'admin_direct@mail.com',
                'password' => bcrypt('admin_direct@123'),
                'phone' => '0375211855',
                'role' => 1,
                'created_at' => new DateTime()
            ]);

    }
}

