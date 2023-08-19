<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntrepriseLicenseModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entreprise_license_modules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('entreprise_license_id')->constrained('entreprise_licenses')->onDelete('CASCADE');
            $table->foreignId('component_module_id')->constrained('component_modules')->onDelete('CASCADE');
            $table->json('permissions')->comment('permissions JSON object');
            $table->boolean('status')->default(true)->comment('{false: Suspended, true: Active}');
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
        Schema::dropIfExists('entreprise_license_modules');
    }
}
