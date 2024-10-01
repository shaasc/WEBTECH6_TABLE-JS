const curriculumData = [
    { course: "NSTP01", description: "Civic Welfare Training Service 1", unit: "3.0", grade: "1.20", remarks: "Passed", semester: "First Semester A.Y 2022-2023" },
    { course: "SCITEC", description: "Science, Technology and Society", unit: "3.0", grade: "1.10", remarks: "Passed", semester: "First Semester A.Y 2022-2023" },
    { course: "INTCOM", description: "Introduction to Computing", unit: "3.0", grade: "1.40", remarks: "Passed", semester: "First Semester A.Y 2022-2023" },
    // Add the rest of your curriculum data
  ];
  
  function renderTable() {
    const tableBody = document.querySelector('tbody');
    
    curriculumData.forEach((item) => {
      const row = `
        <tr>
          <td>${item.course}</td>
          <td>${item.description}</td>
          <td>${item.unit}</td>
          <td>${item.grade}</td>
          <td>${item.remarks}</td>
          <td>${item.course}</td>
          <td>${item.semester}</td>
        </tr>`;
        
      tableBody.innerHTML += row;
    });
  }
  
  // Call renderTable to fill the table when the DOM is loaded
  document.addEventListener('DOMContentLoaded', renderTable);
  