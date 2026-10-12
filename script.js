// Floating hearts animation
const heartsContainer = document.getElementById('hearts-container');
const heartSymbols = ['🤍', '💗', '💖', '💕', '❤️', '🌸', '✨'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    
    // Random size
    const size = Math.random() * 20 + 14;
    heart.style.fontSize = size + 'px';
    
    // Random duration
    const duration = Math.random() * 8 + 6;
    heart.style.animationDuration = duration + 's';
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    heart.style.setProperty('--drift', drift + 'px');
    
    heartsContainer.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create hearts periodically
setInterval(createHeart, 600);

// Create a few initial hearts
for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 300);
}

// Music player
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🎵';
        musicBtn.classList.remove('playing');
    } else {
        // Try to play - browser may require user interaction
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    musicIcon.textContent = '🔊';
                    musicBtn.classList.add('playing');
                })
                .catch(error => {
                    console.log('Musiqi oynadıla bilmədi. music.mp3 faylını əlavə edin.');
                    alert('Musiqi faylı tapılmadı.\n\nmusic.mp3 adlı romantik mahnını eyni qovluğa əlavə edin.');
                });
        }
    }
    isPlaying = !isPlaying;
});

// Optional: try autoplay on first interaction
document.body.addEventListener('click', function once() {
    // Only for visual feedback, actual play needs the button due to browser policies
    document.body.removeEventListener('click', once);
}, { once: true });
