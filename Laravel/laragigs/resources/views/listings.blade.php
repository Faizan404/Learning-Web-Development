<h1>{{ $heading }}</h1>

{{-- @if (count($listings) == 0)
    <p>No Listings Found</p>
    @endif --}}
@unless (count($listings) == 0)
    @foreach ($listings as $listing)
        <h3>{{ $listing['title'] }}</h3>
        <p>{{ $listing['description'] }}</p>
    @endforeach
@else
    <p>No Listings Found</p>
@endunless
