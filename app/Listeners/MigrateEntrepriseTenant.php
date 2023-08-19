<?php

namespace App\Listeners;

use App\Events\EntrepriseCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class MigrateEntrepriseTenant
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  EntrepriseCreated  $event
     * @return void
     */
    public function handle(EntrepriseCreated $event)
    {
        //
    }
}
