<?php

use GrahamCampbell\Markdown\Facades\Markdown;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

Route::get('/', fn () => view('home'))->name('home');

Route::get('/q/{slug}', function (string $slug) {
    $templateFile = "pages.{$slug}";
    $contentFile  = "content.{$slug}";

    if (!View::exists($templateFile)) {
        return abort(404);
    }

    if (View::exists($contentFile)) {
        $markdownContent = file_get_contents(resource_path("views/content/{$slug}.md"));

        return view($templateFile, [
            'content' => Markdown::convert($markdownContent)->getContent(),
        ]);
    }

    return view($templateFile);
});
