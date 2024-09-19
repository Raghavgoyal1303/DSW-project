// scripts.js

// Dummy data for the charts
const userActivityData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'User Activity',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const systemPerformanceData = {
    labels: ['CPU', 'Memory', 'Disk'], 
    datasets: [{
        label: 'System Load',
        data: [80, 70, 60],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }]
};

// Rendering the charts
const ctx1 = document.getElementById('userActivityChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: userActivityData,
});

const ctx2 = document.getElementById('systemPerformanceChart').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: systemPerformanceData,
});


//scrolling effects
document.getElementById("On-Going-Events").addEventListener('click',()=>{
    document.getElementById("page2").scrollIntoView({behavior: "smooth"});
})

document.getElementById("Up-Coming-Events").addEventListener('click',()=>{
    document.getElementById("page3").scrollIntoView({behavior: "smooth"});
})

document.getElementById("C-members").addEventListener('click',()=>{
    document.getElementById("page4").scrollIntoView({behavior: "smooth"});
})

document.getElementById("Attendance-reports").addEventListener('click',()=>{
    document.getElementById("page5").scrollIntoView({behavior: "smooth"});
})

        // Show/hide form on button click
        document.getElementById("showFormBtn").addEventListener("click", function() {
            var form = document.getElementById("eventForm");
            if (form.style.display === "none" || form.style.display === "") {
                form.style.display = "block";
            } else {
                form.style.display = "none";
            }
        });

        // Add event to the table on button click
        document.getElementById("addEventBtn").addEventListener("click", function() {
            // Get the values from the form
            var eventName = document.getElementById("eventName").value;
            var eventDescription = document.getElementById("eventDescription").value;
            var eventDate = document.getElementById("eventDate").value;
            var eventTime = document.getElementById("eventTime").value;
            var eventLocation = document.getElementById("eventLocation").value;
            var organizerName = document.getElementById("organizerName").value;
            var eventCapacity = document.getElementById("eventCapacity").value;

            // Make sure all fields are filled out
            if (eventName === "" || eventDescription === "" || eventDate === "" || eventTime === "" || eventLocation === "" || organizerName === "" || eventCapacity === "") {
                alert("Please fill out all fields.");
                return;
            }

            // Create a new row for the event
            var table = document.getElementById("eventTable").getElementsByTagName("tbody")[0];
            var newRow = table.insertRow();

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);
            var cell7 = newRow.insertCell(6);

            // Add the event data to the new row
            cell1.textContent = eventName;
            cell2.textContent = eventDescription;
            cell3.textContent = eventDate;
            cell4.textContent = eventTime;
            cell5.textContent = eventLocation;
            cell6.textContent = organizerName;
            cell7.textContent = eventCapacity;

            // Clear the form fields after submission
            document.getElementById("eventName").value = "";
            document.getElementById("eventDescription").value = "";
            document.getElementById("eventDate").value = "";
            document.getElementById("eventTime").value = "";
            document.getElementById("eventLocation").value = "";
            document.getElementById("organizerName").value = "";
            document.getElementById("eventCapacity").value = "";

            // Hide the form again
            document.getElementById("eventForm").style.display = "none";
        });



        // council members js

        // Sample Data for Council Members, Tasks, Attendance, Events, and Clubs
        const councilMembers = [
            { name: 'John Doe', role: 'President', status: 'Active', contact: 'john@example.com' },
            { name: 'Jane Smith', role: 'Treasurer', status: 'Active', contact: 'jane@example.com' },
            { name: 'Alice Brown', role: 'Secretary', status: 'Inactive', contact: 'alice@example.com' }
        ];

        const taskAssignments = [
            { member: 'John Doe', task: 'Budget Review', progress: 'In Progress', deadline: 'Sept 30, 2024' },
            { member: 'Jane Smith', task: 'Event Planning', progress: 'Completed', deadline: 'Aug 15, 2024' }
        ];

        const attendanceRecords = [
            { member: 'John Doe', lastMeeting: 'Sept 10, 2024', missed: '2' },
            { member: 'Jane Smith', lastMeeting: 'Aug 25, 2024', missed: '0' },
            { member: 'Alice Brown', lastMeeting: 'July 12, 2024', missed: '3' }
        ];

        const eventParticipation = [
            { member: 'John Doe', eventName: 'Fall Festival', role: 'Event Manager', status: 'Active' },
            { member: 'Jane Smith', eventName: 'Charity Auction', role: 'Coordinator', status: 'Completed' }
        ];

        const clubInvolvement = [
            { member: 'John Doe', club: 'Drama Club', eventsOrganized: '3', engagement: 'High' },
            { member: 'Jane Smith', club: 'Music Society', eventsOrganized: '5', engagement: 'Medium' }
        ];

        // Populate Council Members Overview
        const membersTable = document.getElementById('membersTable');
        councilMembers.forEach(member => {
            membersTable.innerHTML += `
                <tr>
                    <td>${member.name}</td>
                    <td>${member.role}</td>
                    <td class="${member.status === 'Active' ? 'status-active' : 'status-inactive'}">${member.status}</td>
                    <td>${member.contact}</td>
                </tr>
            `;
        });

        // Populate Task Assignments
        const tasksTable = document.getElementById('tasksTable');
        taskAssignments.forEach(task => {
            tasksTable.innerHTML += `
                <tr>
                    <td>${task.member}</td>
                    <td>${task.task}</td>
                    <td>${task.progress}</td>
                    <td>${task.deadline}</td>
                </tr>
            `;
        });

        // Populate Attendance Records
        const attendanceTable = document.getElementById('attendanceTable');
        attendanceRecords.forEach(record => {
            attendanceTable.innerHTML += `
                <tr>
                    <td>${record.member}</td>
                    <td>${record.lastMeeting}</td>
                    <td>${record.missed}</td>
                </tr>
            `;
        });

        // Populate Event Management Participation
        const eventsTable = document.getElementById('eventsTable');
        eventParticipation.forEach(event => {
            eventsTable.innerHTML += `
                <tr>
                    <td>${event.member}</td>
                    <td>${event.eventName}</td>
                    <td>${event.role}</td>
                    <td>${event.status}</td>
                </tr>
            `;
        });

        // Populate Club/Committee Involvement
        const clubsTable = document.getElementById('clubsTable');
        clubInvolvement.forEach(club => {
            clubsTable.innerHTML += `
                <tr>
                    <td>${club.member}</td>
                    <td>${club.club}</td>
                    <td>${club.eventsOrganized}</td>
                    <td>${club.engagement}</td>
                </tr>
            `;
        });