// Add course functionality with modal
document.getElementById('addCourseBtn').addEventListener('click', function () {
    document.getElementById('courseModal').style.display = 'flex';
  });
  
  // Close the modal
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('courseModal').style.display = 'none';
  });
  
  // Save course
  document.getElementById('saveCourseBtn').addEventListener('click', function () {
    const courseName = document.getElementById('courseName').value;
    const courseDesc = document.getElementById('courseDesc').value;
  
    if (courseName && courseDesc) {
      let courseList = document.createElement('div');
      courseList.className = 'card';
      courseList.innerHTML = `
        <h3>${courseName}</h3>
        <p>${courseDesc}</p>
      `;
      document.querySelector('.dashboard-cards').appendChild(courseList);
      document.getElementById('courseModal').style.display = 'none';
    } else {
      alert('Please fill in all fields');
    }
  });
  
  // Alerts for other actions
  document.getElementById('viewStudentsBtn').addEventListener('click', function () {
    alert('Viewing students...');
  });
  
  document.getElementById('attendanceBtn').addEventListener('click', function () {
    alert('Managing attendance...');
  });
  
  document.getElementById('reportsBtn').addEventListener('click', function () {
    alert('Generating reports...');
  });
  