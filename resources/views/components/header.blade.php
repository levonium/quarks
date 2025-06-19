<header class="container mr-auto p-8">
    @if (request()->routeIs('home'))
        <span class="text-2xl font-semibold">
            QUARKS
        </span>
    @else
        <a href="/">
            <span aria-hidden="true">🔙</span>
            back to homepage
        </a>
    @endif
</header>
