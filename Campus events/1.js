// This is a simulation. In a real app, you would fetch this from your server.
const featuredEvents = [
    {
        imageUrl: 'https://via.placeholder.com/400x250',
        category: 'Technology',
        date: 'Fri, Mar 15 • 09:00 AM',
        title: 'Tech Innovation Summit 2024',
        description: 'Join leading tech innovators and entrepreneurs for a day of inspiring talks.',
        location: 'Engineering Auditorium',
        capacity: '245/300'
    },
    // ... add other event objects here
];

// Function to create an HTML card for one event
function createEventCard(event) {
    return `
        <div class="event-card">
            <div class="card-image">
                <img src="${event.imageUrl}" alt="${event.title}">
                <span class="card-category">${event.category}</span>
            </div>
            <div class="card-content">
                <p class="card-date">${event.date}</p>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-description">${event.description}</p>
                <div class="card-footer">
                    <span>${event.location}</span>
                    <span class="card-capacity">${event.capacity}</span>
                </div>
                <button class="btn btn-primary full-width">View Details</button>
            </div>
        </div>
    `;
}

// Function to display all events on the page
function displayEvents() {
    const cardGrid = document.querySelector('.card-grid'); // Make sure your grid has this class
    let allCardsHTML = '';
    
    featuredEvents.forEach(event => {
        allCardsHTML += createEventCard(event);
    });

    cardGrid.innerHTML = allCardsHTML;
}

// When the page loads, run the displayEvents function
window.addEventListener('DOMContentLoaded', displayEvents);