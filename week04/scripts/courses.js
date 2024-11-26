// Define the course object with sections
const aCourse = {
    // The course code and name
    code: "CSE121b",
    name: "Javascript Language",
  
    // Array of sections for this course
    sections: [
      { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
      { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" },
    ],
  
    /**
     * Method to set the course name and code in the HTML.
     * Uses 'this' to refer to the current object and update the DOM elements.
     */
    setCourseDetails() {
      document.getElementById("courseName").textContent = this.name; // Set course name
      document.getElementById("courseCode").textContent = this.code; // Set course code
    },
  
    /**
     * Method to render the sections in the table.
     * Clears the table body and dynamically inserts rows for each section.
     */
    renderSections() {
      const sectionsTable = document.getElementById("sections"); // Reference to the table body
      sectionsTable.innerHTML = ""; // Clear any existing rows
  
      // Loop through each section and create a new table row
      this.sections.forEach((section) => {
        const row = document.createElement("tr");
  
        // Populate the row with section details
        row.innerHTML = `
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        `;
  
        // Add the row to the table body
        sectionsTable.appendChild(row);
      });
    },
  
    /**
     * Method to modify the enrollment count of a section.
     * Can be used to add or subtract students.
     * @param {number} sectionNum - The section number to modify.
     * @param {number} change - Positive or negative value to adjust enrollment.
     */
    modifyEnrollment(sectionNum, change) {
      // Use Array.find() to locate the section with the given section number
      const section = this.sections.find((sec) => sec.sectionNum === parseInt(sectionNum));
  
      if (section) {
        section.enrolled += change; // Adjust the enrollment count
        if (section.enrolled < 0) section.enrolled = 0; // Ensure enrollment doesn't go below zero
  
        this.renderSections(); // Re-render the sections table to reflect changes
      } else {
        alert("Section not found!"); // Show error if section number is invalid
      }
    },
  
    /**
     * Method to handle adding students (calls modifyEnrollment with +1).
     * @param {number} sectionNum - The section number to add a student to.
     */
    enrollStudent(sectionNum) {
      this.modifyEnrollment(sectionNum, 1);
    },
  
    /**
     * Method to handle dropping students (calls modifyEnrollment with -1).
     * @param {number} sectionNum - The section number to drop a student from.
     */
    dropStudent(sectionNum) {
      this.modifyEnrollment(sectionNum, -1);
    },
  };
  
  // Initialize the course details and sections when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    aCourse.setCourseDetails(); // Populate the course name and code
    aCourse.renderSections(); // Populate the table with sections
  
    // Event listener for enrolling a student
    document.getElementById("enrollStudent").addEventListener("click", () => {
      const sectionNumber = document.getElementById("sectionNumber").value; // Get the input value
      aCourse.enrollStudent(sectionNumber); // Call enrollStudent method
    });
  
    // Event listener for dropping a student
    document.getElementById("dropStudent").addEventListener("click", () => {
      const sectionNumber = document.getElementById("sectionNumber").value; // Get the input value
      aCourse.dropStudent(sectionNumber); // Call dropStudent method
    });
  });
  