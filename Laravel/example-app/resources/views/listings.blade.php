<h1>{{ $heading }}</h1>

{{-- @if (count($listings) == 0)
    <p>No Listings found</p>
    @endif --}}
@unless (count($listings) == 0)
    @foreach ($listings as $listing)
        <a href="/listing/{{ $listing['id'] }}">
            <h3>{{ $listing['title'] }}</h3>
        </a>
        <p>{{ $listing['description'] }}</p>
    @endforeach
@else
    <p>No Listings found</p>
@endunless
