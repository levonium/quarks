@extends('layouts.app', ['title' => 'Countries, letters and numbers'])

@section('content')
    <div class="content">

        <div class="mb-8">
            <h1>
                Countries, letters and numbers
            </h1>

            <p>
                There are about 200 countries and just 26 letters. Let's see which letters country names start and end with
                the most. First, here's the names list that is used.
            </p>
        </div>

        <x-country-block type="list"
                         heading="Country names in alphabetical order"
                         :chart="false">

            <p>
                Just in case
            </p>
        </x-country-block>

        <x-country-block type="start-with" heading="Country names starting with each letter">

            <p>
                Apparently, "S" is the most common letter here, 26 country names start with it. Next come "M", "B", "C" with
                18, 17, 17 names. There are no country names starting with letters "W" and "X".
            </p>
        </x-country-block>

        <x-country-block type="end-with" heading="Country names ending with each letter">

            <p>
                This was surprising. 75 country names end with "A", and "N" is the second with 24 names. There are 8 letters
                that no country name ends with.
            </p>
        </x-country-block>

        <x-country-block type="consecutive" heading="Country names containing consecutive repeating letters">

            <p>
                Only "EE", "LL", "RR", "SS" appear in 2 names each and "CC", "OO", "PP", "TT" in just one name each. In
                total 12 country names, the other 183 names do not have consecutive repeating letters.
            </p>
        </x-country-block>

        <x-country-block type="repeating" heading="Country names containing 3 or more non-consecutive repeating letters">

            <p class="text-sm italic">
                This one is different in a sense that I didn't just check for each letter's occurrence in the name, but
                separate words, mostly because of words like united, republic, and, etc.. For example, in "Democratic
                Republic of Congo" there are 4 occurrences of letter "C" and 3 occurrences of letter "O", but there are no
                repeating letters in any of the 4 words that the name consists of. So it doesn't pass.
            </p>

            <p>
                Again, "A" wins with 17 results, but the most interesting country name is "Philippines" because there are 3
                "P"s and 3 "I"s in it.
                And the next ones are "Canada", "Panama", "Greece" where the half of their names is the letter "A" or "E" in
                for Greece.
            </p>
        </x-country-block>

        <x-country-block type="length" heading="Country names by length">

            <p>
                There are 10 country names with just 4 letters, and the longest one has 52 letters - "United Kingdom of
                Great Britain and Northern Ireland". The most common length is 7, there 42 countries with 7-letter names.
            </p>
        </x-country-block>

        <x-country-block type="word-count" heading="Country names by word-count">

            <p>
                There are 161 countries whose names consist of just one word, and obviously the UK has the most words in it.
            </p>
        </x-country-block>
    </div>
@endsection

@push('scripts')
    @vite(['resources/js/countries/app.ts'])
@endpush
