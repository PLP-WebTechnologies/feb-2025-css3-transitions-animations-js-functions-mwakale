// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const serviceDateInput = document.getElementById('service-date'); // Updated ID
    const servicesList = document.querySelectorAll('ol li');
    const image = document.querySelector('img');

    // Form validation and submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for demo purposes
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            alert('Name is required.');
            isValid = false;
        }

        // Validate email
        if (!emailInput.value.includes('@')) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.length < 8) {
            alert('Password must be at least 8 characters long.');
            isValid = false;
        }

        // Validate service date
        if (serviceDateInput.value === '') {
            alert('Please select a service date.');
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            return;
        }

        // Save preferences and trigger animation
        savePreferences();
        const button = event.target.querySelector('input[type="submit"]');
        button.style.animation = 'bounce 0.5s ease-in-out';
    });

    // Real-time feedback for name input
    nameInput.addEventListener('input', () => {
        nameInput.style.borderColor = nameInput.value.trim() === '' ? 'red' : 'green';
    });

    // Real-time feedback for email input
    emailInput.addEventListener('input', () => {
        emailInput.style.borderColor = emailInput.value.includes('@') ? 'green' : 'red';
    });

    // Real-time feedback for password input
    passwordInput.addEventListener('input', () => {
        passwordInput.style.borderColor = passwordInput.value.length >= 8 ? 'green' : 'red';
    });

    // Button click event
    const changeTextButton = document.getElementById("changeTextButton");
    const textToChange = document.getElementById("textToChange");
    changeTextButton.addEventListener("click", () => {
        textToChange.textContent = "You clicked the button!";
    });

    // Hover effect
    const hoverImage = document.getElementById("hoverImage");
    hoverImage.addEventListener("mouseover", () => {
        hoverImage.style.border = "5px solid red";
    });
    hoverImage.addEventListener("mouseout", () => {
        hoverImage.style.border = "none";
    });

    // Secret action (double-click)
    const secretButton = document.getElementById("secretButton");
    const secretMessage = document.getElementById("secretMessage");
    secretButton.addEventListener("dblclick", () => {
        secretMessage.style.display = "block";
    });

    // Change button color
    const colorChangeButton = document.getElementById("colorChangeButton");
    colorChangeButton.addEventListener("click", () => {
        colorChangeButton.style.backgroundColor = colorChangeButton.style.backgroundColor === "green" ? "blue" : "green";
    });

    // Tabs functionality
    const tabs = document.querySelectorAll(".tab");
    const tabContent = document.getElementById("tabContent");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabContent.textContent = `You clicked on Tab ${tab.dataset.tab}`;
        });
    });

    // Real-Time Feedback
    const feedbackInput = document.getElementById("feedbackInput");
    const feedbackOutput = document.getElementById("feedbackOutput");
    feedbackInput.addEventListener("input", () => {
        feedbackOutput.textContent = feedbackInput.value || "Your feedback will appear here in real-time.";
    });

    // Hover effect on services list
    servicesList.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'green';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '';
        });
    });

    // Click event on the image
    image.addEventListener('click', () => {
        alert('You clicked on the image!');
    });

    // Store user preferences in localStorage
    function savePreferences() {
        const name = nameInput.value;
        const email = emailInput.value;
        const residence = document.getElementById('Residence').value;

        const preferences = { name, email, residence };
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        alert('Preferences saved successfully!');
    }

    // Retrieve user preferences from localStorage
    function loadPreferences() {
        const preferences = localStorage.getItem('userPreferences');
        if (preferences) {
            const parsedPreferences = JSON.parse(preferences);
            nameInput.value = parsedPreferences.name;
            emailInput.value = parsedPreferences.email;
            document.getElementById('Residence').value = parsedPreferences.residence;
            alert('Preferences loaded successfully!');
        }
    }

    // Load preferences on page load
    loadPreferences();

    // Bounce animation
    if (!document.querySelector('style[data-animation="bounce"]')) {
        const style = document.createElement('style');
        style.setAttribute('data-animation', 'bounce');
        style.innerHTML = `
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }`;
        document.head.appendChild(style);
    }
});