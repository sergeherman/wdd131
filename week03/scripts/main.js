function fullName(first, last) {
    return `${first} ${last}`;
  }
  
  let firstName = 'Antonia';
  let lastName = 'Francesca';
  
  // Get the HTML element by its ID
//   let fullNameElement = document.getElementById('fullName');
  
  // Call the function and set the result as the text content of the element
//   fullNameElement.textContent = fullName(firstName, lastName);

  document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);
  