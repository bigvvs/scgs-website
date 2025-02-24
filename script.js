document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "scgs",
        "rp",
        "v2",
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledMessages = shuffle(messages);
    const messageElement = document.querySelector('.main-content h3');

    if (messageElement) {
        messageElement.textContent = shuffledMessages[0];
    }
});