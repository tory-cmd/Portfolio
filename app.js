// Function for adopting form validation
function validateAdoptingForm(event) {
    event.preventDefault();

    // Utilize DOM
    const nameField = document.getElementById('adoptName');
    const ageField = document.getElementById('adoptAge');
    const animalsField = document.getElementById('adoptFavoriteAnimals');
    const messageDiv = document.getElementById('adoptMessage');

    // Form Validation
    if (nameField.value === '' || ageField.value === '' || animalsField.value === '') {
        alert('All fields are required!');
        return false;
    }

    if (isNaN(ageField.value) || ageField.value <= 0) {
        alert('Age must be a positive number!');
        return false;
    }

    // Try-Catch Block
    try {
        const userData = {
            name: nameField.value,
            age: parseInt(ageField.value),
            favoriteAnimals: animalsField.value.split(',').map(animal => animal.trim())
        };

        // Conditional
        let ageMessage = userData.age < 18 ? 
            'You are too young to adopt!' : 
            'You are over 18! You may submit an adoption application.';
        
        let greetingMessage = `Welcome ${userData.name}! ${ageMessage}`;

        // Basic Arithmetic: Calculate the number of cells wanted
        let numberOfCells = userData.favoriteAnimals.length;

        // Loop: Display animals
        let animalsList = '<ul>';
        for (let i = 0; i < userData.favoriteAnimals.length; i++) {
            animalsList += `<li>${userData.favoriteAnimals[i]}</li>`;
        }
        animalsList += '</ul>';

        // Display the message and animals list
        messageDiv.innerHTML = `<p>${greetingMessage}</p><p>Cell #(s) you want to adopt: ${numberOfCells}</p>${animalsList}`;

        // Use local storage
        localStorage.setItem('adoptUserData', JSON.stringify(userData));
        alert(greetingMessage);
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while submitting the form.');
    }

    return true;
}

// Function for fostering form validation
function validateFosteringForm(event) {
    event.preventDefault();

    // Utilize DOM
    const nameField = document.getElementById('fosterName');
    const ageField = document.getElementById('fosterAge');
    const animalsField = document.getElementById('fosterFavoriteAnimals');
    const messageDiv = document.getElementById('fosterMessage');

    // Form Validation
    if (nameField.value === '' || ageField.value === '' || animalsField.value === '') {
        alert('All fields are required!');
        return false;
    }

    if (isNaN(ageField.value) || ageField.value <= 0) {
        alert('Age must be a positive number!');
        return false;
    }

    // Try-Catch Block
    try {
        const userData = {
            name: nameField.value,
            age: parseInt(ageField.value),
            favoriteAnimals: animalsField.value.split(',').map(animal => animal.trim())
        };

        // Conditional 
        let ageMessage = userData.age < 18 ? 
            'You are too young to foster!' : 
            'You are an adult! You may foster.';
        
        let greetingMessage = `Welcome ${userData.name}! ${ageMessage}`;

        // Basic Arithmetic: Calculate the number of cells wanted
        let numberOfCells = userData.favoriteAnimals.length;

        // Loop: Display animals
        let animalsList = '<ul>';
        for (let i = 0; i < userData.favoriteAnimals.length; i++) {
            animalsList += `<li>${userData.favoriteAnimals[i]}</li>`;
        }
        animalsList += '</ul>';

        // Display the message and animals list
        messageDiv.innerHTML = `<p>${greetingMessage}</p><p>Cell #(s) you want to foster: ${numberOfCells}</p>${animalsList}`;

        // Use local storage
        localStorage.setItem('fosterUserData', JSON.stringify(userData));
        alert(greetingMessage);
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while submitting the form.');
    }

    return true;
}

// Function for volunteer form validation
function validateVolunteerForm(event) {
    event.preventDefault();

    // Utilize DOM
    const nameField = document.getElementById('volunteerName');
    const ageField = document.getElementById('volunteerAge');
    const messageDiv = document.getElementById('volunteerMessage');

    // Form Validation
    if (nameField.value === '' || ageField.value === '') {
        alert('All fields are required!');
        return false;
    }

    if (isNaN(ageField.value) || ageField.value <= 0) {
        alert('Age must be a positive number!');
        return false;
    }

    // Try-Catch Block
    try {
        const userData = {
            name: nameField.value,
            age: parseInt(ageField.value)
        };

        // Conditional 
        let ageMessage = userData.age < 18 ? 
            'You are a minor, you may not volunteer.' : 
            'You are an adult! Come by next week to start your volunteer service.';
        
        let greetingMessage = `Welcome ${userData.name}! ${ageMessage}`;

        // Display the message
        messageDiv.innerHTML = `<p>${greetingMessage}</p>`;

        // Use local storage
        localStorage.setItem('volunteerUserData', JSON.stringify(userData));
        alert(greetingMessage);
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while submitting the form.');
    }

    return true;
}

// Attach event listeners to the forms
document.getElementById('adoptingForm').addEventListener('submit', validateAdoptingForm);
document.getElementById('fosteringForm').addEventListener('submit', validateFosteringForm);
document.getElementById('volunteerForm').addEventListener('submit', validateVolunteerForm);

// Display stored data on page load
window.onload = function() {
    const storedVolunteerData = localStorage.getItem('volunteerUserData');
    if (storedVolunteerData) {
        const userData = JSON.parse(storedVolunteerData);
        document.getElementById('volunteerMessage').textContent = `Welcome back, ${userData.name}!`;
    }
};
