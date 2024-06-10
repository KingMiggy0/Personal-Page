
// Function to hide the welcome box
function hideWelcomeBox() {
    document.getElementById('welcomeBox').style.display = 'none';
}


// Event listener to show the welcome box when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcomeBox').style.display = 'block';
});