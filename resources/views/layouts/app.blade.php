<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/quark.png">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="preconnect" href="https://fonts.bunny.net">

    <title>{{ isset($title) ? $title . ' |>' : '' }} {{ config('app.name') }}</title>
    @if ($description ?? null)
        <meta name="description" content="{{ $description }}">
    @endif

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    {{-- <script defer data-domain="levon.dev" src="https://plausible.io/js/plausible.js"></script> --}}
</head>

<body class="bg-slate-100 font-sans text-lg leading-relaxed text-slate-800 antialiased">

    <x-header />

    <main class="container mr-auto rounded-r-lg bg-white p-8">
        @yield('content')
    </main>

    <x-footer />

    @stack('scripts')
</body>

</html>
