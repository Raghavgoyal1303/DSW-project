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


//register for new event

// document.getElementById('eventform').addEventListener('submit', async function(event){
//     event.preventDefault();

//     const eventName = document.getElementById('eventName').value;
//     const eventDate = document.getElementById('eventDate').value;
//     const eventLocation = document.getElementById('eventLocation').value;
//     const eventDescription = document.getElementById('eventDescription').value;

//     const eventData = {
//         eventName: eventName,
//         eventDate: eventDate,
//         eventLocation: eventLocation,
//         eventDescription: eventDescription
// };

//     try{
//         const response = await fetch('http://localhost:3000/api/events/register',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',

//             },
//             body: JSON.stringify(eventData),
//         });

//             if (response.ok) {
//                 const result = await response.json();
//                 alert('Event added successfully!');
//                 console.log(result); // For debugging
//             } else {
//                 const errorData = await response.json();
//                 alert(`Error: ${errorData.message}`);
//             }

//     }
//     catch(error){
//         console.error('Error:', error);
//         alert('An error occurred while adding the event.');
//     }
// });