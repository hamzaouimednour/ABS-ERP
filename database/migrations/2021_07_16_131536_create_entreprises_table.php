<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntreprisesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entreprises', function (Blueprint $table) {
            $table->id();
            $table->foreignId('uid')->constrained('users');
            $table->string('name', 250);
            $table->string('email', 250)->nullable()->unique();
            $table->text('description')->nullable();
            $table->json('phone')->nullable();
            $table->text('address')->nullable();
            $table->text('logo')->nullable();
            $table->integer('user_licenses')->nullable();
            $table->integer('component_licenses')->nullable();
            $table->tinyInteger('status')->default(1)->comment('{0: Suspended, 1: Active, 2: Locked}');
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
        Schema::dropIfExists('entreprises');
    }
}
