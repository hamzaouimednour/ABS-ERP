<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntrepriseLicensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entreprise_licenses', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 250)->unique();
            $table->foreignId('entreprise_id')->constrained('entreprises')->onDelete('CASCADE');
            $table->foreignId('component_id')->constrained('components')->onDelete('CASCADE');
            $table->boolean('license_limited')->default(1);
            $table->timestamp('license_start_date')->nullable();
            $table->timestamp('license_end_date')->nullable();
            $table->integer('status')->default(1)->comment('{0: Suspended, 1: Active, 2: Locked}');
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
        Schema::dropIfExists('entreprise_licenses');
    }
}
