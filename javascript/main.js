// Function to access and render the Bootstrap Modal Welcome message
function displayWelcomeMessage() {
    console.log("Window has finished loading!");

    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

// Event listener to trigger on Window loading
window.addEventListener("load", displayWelcomeMessage);