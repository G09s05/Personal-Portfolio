// Change Background Color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#e0e0e0";
}

// Show Greeting Based on Time
function showGreeting() {
    let date = new Date();
    let hours = date.getHours();
    let greeting = hours < 12 ? "Good Morning" :
                   hours < 18 ? "Good Afternoon" :
                   "Good Evening";
    alert(greeting);
}

// Display User Input from Form
function displayFormData(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    alert(`Thank you, ${name}! We'll get back to you at ${email} soon.\n\nMessage: ${message}`);
}
