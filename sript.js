document.getElementById('calendarIcon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const dateInput = document.getElementById('dateInput');
    
    // Programmatically trigger the date input
    dateInput.click();
});

