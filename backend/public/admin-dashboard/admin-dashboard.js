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
