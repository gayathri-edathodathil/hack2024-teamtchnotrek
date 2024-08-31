const musicData = [
    { title: 'Relaxing Music 1', src: 'path-to-your-music-file1.mp3' },
    { title: 'Relaxing Music 2', src: 'path-to-your-music-file2.mp3' },
    { title: 'Nature Sound 1', src: 'path-to-your-music-file3.mp3' },
    { title: 'Nature Sound 2', src: 'path-to-your-music-file4.mp3' }
];

const searchBar = document.getElementById('search-bar');
const musicList = document.getElementById('music-list');

function renderMusicList(filter = '') {
    musicList.innerHTML = '';
    musicData.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h6>${item.title}</h6>
                <audio controls class="w-100">
                    <source src="${item.src}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            `;
            musicList.appendChild(div);
        });
}

searchBar.addEventListener('input', () => renderMusicList(searchBar.value));

// Volume control
document.getElementById('volume').addEventListener('input', function() {
    const audioPlayer1 = document.getElementById('audio-player1');
    const audioPlayer2 = document.getElementById('audio-player2');
    audioPlayer1.volume = this.value;
    audioPlayer2.volume = this.value;
});

// Background music
document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.2; // Set background music volume
    backgroundMusic.play();
});

// Feedback form
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = `Thank you for your feedback: "${feedback}"`;
    feedbackMessage.style.color = 'green';
    document.getElementById('feedback').value = ''; // Clear the textarea
});
