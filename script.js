document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Are you ready for this new adventure?",
        "The roleplay server where the limit is your imagination!",
        "Come and be part of this New Generation of Roleplay!",
        "Don't miss the opportunity to make a difference! Join us!",
        "The best Roleplay experience is just a click away!"
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