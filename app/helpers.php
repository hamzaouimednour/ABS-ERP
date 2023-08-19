<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

/**
 * get_current_page
 *
 * @param  mixed $page
 */
function css_current_page(string $page = null, bool $style = false, int $index = 1)
{
    $checkCurrentPage = ($style)
    ? Str::contains(request()->path(), $page)
    : Str::endsWith(request()->path(), $page);

    if ($checkCurrentPage) return [
        'is-expanded',
        'active',
        'open'
    ][$index];

    return array_fill(0, 3, NULL)[$index];
}

/**
 * local_path
 *
 * @param  mixed $path
 * @return string
 */
function local_path(array $path = [], bool $unix = false)
{
    $path = implode(DIRECTORY_SEPARATOR, $path);
    $path = (env('APP_ENV') === 'local') ? public_path($path) : base_path($path);
    $path = ($unix) ? str_replace(DIRECTORY_SEPARATOR, '/', $path) : $path;
    return $path;
}

/**
 * generate hash / name from a given string
 *
 * @param  mixed $fname
 * @return string
 */
function gen_fname(string $fname = '', string $fext = ''){
    $fname = uniqid() . hash('fnv164', $fname); 
    if($fext) $fname = $fname . '.' . $fext;
    return $fname;
}
function gen_ehash(string $ehash = ''){
    return hash('fnv1a32', $ehash);
}