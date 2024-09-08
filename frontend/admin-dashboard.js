document.addEventListener('DOMContentLoaded', function() {
    const addEventBtn = document.getElementById('addEventBtn');
    const eventsTable = document.getElementById('eventsTable').getElementsByTagName('tbody')[0];
    const modal = document.getElementById('eventModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const eventForm = document.getElementById('eventForm');

    addEventBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const eventId = document.getElementById('eventId').value;
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;
        const eventDescription = document.getElementById('eventDescription').value;

        if (eventId && eventName && eventDate && eventLocation && eventDescription) {
            const newRow = eventsTable.insertRow();

            newRow.insertCell(0).textContent = eventId;
            newRow.insertCell(1).textContent = eventName;
            newRow.insertCell(2).textContent = eventDate;
            newRow.insertCell(3).textContent = eventLocation;
            newRow.insertCell(4).textContent = eventDescription;

            modal.style.display = 'none';
            eventForm.reset();
        } else {
            alert('All fields are required to add a new event.');
        }
    });
});


document.getElementById('Dashboard').addEventListener('click', ()=>{
    document.getElementById('page1').scrollIntoView({behaviour: "smooth"});
})

// fetching data for event
// Function to fetch events from the backend and populate the table
async function fetchAndRenderEvents() {
    try {
        const response = await fetch('https://dsw-project.onrender.com/api/events');
        if (response.ok) {
            const events = await response.json();
            const eventsTableBody = document.querySelector('#eventsTable tbody');

            // Clear any existing rows
            eventsTableBody.innerHTML = '';

            // Populate table with events
            events.forEach(event => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${event.eventId}</td>
                    <td>${event.name}</td>
                    <td>${new Date(event.date).toLocaleDateString()}</td>
                    <td>${event.location}</td>
                    <td>${event.description}</td>
                `;
                eventsTableBody.appendChild(row);
            });
        } else {
            console.error('Failed to fetch events');
        }
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

// Call the fetchAndRenderEvents function when the page loads
window.onload = fetchAndRenderEvents;
