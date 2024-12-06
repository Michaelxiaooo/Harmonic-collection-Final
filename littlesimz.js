const personImage = document.getElementById('person-image');
const speechBubble = document.getElementById('speech-bubble');

personImage.addEventListener('click', () => {

    if (speechBubble.style.display === 'none') {
        speechBubble.style.display = 'block';
    } else {
        speechBubble.style.display = 'none';
    }
});
