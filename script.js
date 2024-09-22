function showGameInfo(gameName) {
    const gameInfoModal = document.getElementById("gameInfoModal");
    const gameTitle = document.getElementById("gameTitle");
    const gameDescription = document.getElementById("gameDescription");

    // Set dynamic game info (you can customize descriptions here)
    gameTitle.textContent = gameName;
    gameDescription.textContent = gameName + " is a fun and exciting game. Explore new levels, challenges, and much more!";

    // Show the modal
    gameInfoModal.style.display = "block";
}

function closeModal() {
    const gameInfoModal = document.getElementById("gameInfoModal");
    gameInfoModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const gameInfoModal = document.getElementById("gameInfoModal");
    if (event.target === gameInfoModal) {
        gameInfoModal.style.display = "none";
    }
}