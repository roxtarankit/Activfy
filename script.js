// Future feature: Add interactivity for filtering and searching
document.getElementById('search').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const venues = document.querySelectorAll('.venue-card');
    
    venues.forEach(venue => {
        const name = venue.querySelector('h2').textContent.toLowerCase();
        if (name.includes(query)) {
            venue.style.display = 'block';
        } else {
            venue.style.display = 'none';
        }
    });
});

document.getElementById('sports-filter').addEventListener('change', function(event) {
    // Filter based on the selected sport
    const selectedSport = event.target.value;
    // Logic for filtering by sport
});
