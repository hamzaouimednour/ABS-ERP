<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('deuxieme_prenom')->nullable();
            // email and phones
            $table->string('email')->nullable()->unique();
            $table->string('country_code', 5)->nullable();
            $table->integer('dialling_code')->unsigned()->nullable();
            $table->string('telephone_mobile', 25)->nullable();
            $table->string('telephone')->nullable();
            // credentials
            $table->string('login')->unique();
            $table->string('password');
            $table->unsignedInteger('auth_level');
            $table->foreign('auth_level')->references('level')->on('authority');
            // tokens and logs
            $table->tinyInteger('status')->default(1)->comment('{0: Suspended, 1: Active, 2: Locked}');
            $table->string('photo')->nullable();
            $table->text('log_activity')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
