// script.js

// Function 1: Filter Products instantly
function searchProducts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h3').innerText.toLowerCase();
        
        if (title.includes(input)) {
            cards[i].style.display = ""; // Show
        } else {
            cards[i].style.display = "none"; // Hide
        }
    }
}

// Function 2: Fake Form Submission Animation
function submitForm(event) {
    event.preventDefault(); // Stop page refresh
    
    let btn = event.target.querySelector('button');
    let originalText = btn.innerText;

    // Change button look
    btn.innerText = "✓ Request Sent!";
    btn.style.backgroundColor = "#2ecc71"; // Green
    
    // Reset after 3 seconds
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; 
        event.target.reset(); // Clear form inputs
    }, 3000);
}