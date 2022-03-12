import './styles.css'

let player;
let playerLoaded = false;
let playerDone = false;

const playBtn = document.getElementById('playBtn');
const noiseContainer = document.getElementById('noise');

// Por hora penas armazena a url do vídeo, podemos adicionar uma variável
// para evitar que o vídeo seja repetido, etc...
const videoCollection = [
    {
        src: "KdPbZ-0Giio",
    },
    {
        src: "hDPLcyxmakk",
    },
];

function pickVideo() {
    return videoCollection[Math.floor(Math.random() * videoCollection.length)].src;
}

function onPlayerReady(event) {
    playerLoaded = true;
    noiseContainer.classList.add('hidden');
    playBtn.classList.add('hidden');

    event.target.playVideo();
}

function stopVideo() {
    player.stopVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && !playerDone) {
        playerDone = true;
    }
}

function createPlayer(src) {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: src,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function init() {
    playBtn.addEventListener('click', () => {
        if (!playerLoaded) {
            //Escolhe um video para tocar
            const v = pickVideo();

            // Cria o player
            createPlayer(v);
        }
    });
}


init();
