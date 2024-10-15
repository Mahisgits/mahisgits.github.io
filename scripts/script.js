function showProjectDetails(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const strengthItems = document.querySelectorAll('.strength-item');
    let currentIndex = 0;

    function showNextStrength() {
        // Hide current item
        strengthItems[currentIndex].classList.remove('active');

        // Move to the next item
        currentIndex = (currentIndex + 1) % strengthItems.length;

        // Show next item
        strengthItems[currentIndex].classList.add('active');
    }

    // Show next strength every 10 seconds
    setInterval(showNextStrength, 10000);
});
