// Select the necessary DOM elements
const input = document.querySelector('#favchap'); // Input field for favorite chapter
const button = document.querySelector('button');   // Button to add chapters
const list = document.querySelector('#chapterList'); // Unordered list to display chapters

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Check if the input field is not empty
  if (input.value.trim() !== '') {
    // Create a new li element for the chapter entry
    const li = document.createElement('li');
    li.textContent = input.value; // Set the li text to the input value

    // Create a delete button for the entry
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // Optional class for styling

    // Add an event listener to the delete button to remove the entry
    deleteButton.addEventListener('click', function() {
      list.removeChild(li); // Remove the li element from the list
      input.focus(); // Return focus to the input field
    });

    // Append the delete button to the li element
    li.append(deleteButton);

    // Append the li element to the unordered list
    list.append(li);

    // Clear the input field
    input.value = '';
  }

  // Focus back to the input field, regardless of the input status
  input.focus();
});
