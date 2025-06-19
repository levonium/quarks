@props(['heading', 'type', 'chart' => true])

<details class="mt-3 border-b border-slate-100 pb-3">
    <summary class="text-sky-700">
        {{ $heading }}
    </summary>

    <div class="mt-3 pl-6">
        {{ $slot }}
    </div>

    <div id="countries-{{ $type }}" class="grid p-4 md:grid-cols-3"></div>

    @if ($chart)
        <div class="chart-wrapper my-4 px-4">
            <canvas id="countries-{{ $type }}-chart"></canvas>
        </div>
    @endif
</details>
