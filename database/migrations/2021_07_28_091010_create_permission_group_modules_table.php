<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissionGroupModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permission_group_modules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('permission_group_id')->constrained('permission_groups')->onDelete('CASCADE');
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
        Schema::dropIfExists('permission_group_modules');
    }
}
