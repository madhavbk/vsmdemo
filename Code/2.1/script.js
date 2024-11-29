// Get references to the form and list
const form = document.getElementById('inputForm');
const inputText = document.getElementById('inputText');
const list = document.getElementById('list');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission and page reload

    // Get the input value
    const inputValue = inputText.value.trim();

    // If input is not empty, prepend it to the list
    if (inputValue) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;

        // Prepend the new item to the list
        //listItem.textContent.prepend("Velocity")
        list.prepend(listItem);

        // Clear the input field
        inputText.value = '';
    }
});
