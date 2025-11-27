// Card open animation and audio
const card = document.getElementById('card');
const turkeyAudio = document.getElementById('turkey-audio');
let isOpen = false;
let audioTimeout = null;

card.addEventListener('click', () => {
  isOpen = !isOpen;
  if (isOpen) {
    card.classList.add('open');
    document.body.classList.add('card-is-open');
    // Delay audio by 0.5 second
    audioTimeout = setTimeout(() => {
      turkeyAudio.currentTime = 0;
      turkeyAudio.play();
    }, 500);
  } else {
    card.classList.remove('open');
    document.body.classList.remove('card-is-open');
    // Pause and reset audio, cancel timeout
    if (audioTimeout) {
      clearTimeout(audioTimeout);
      audioTimeout = null;
    }
    turkeyAudio.pause();
    turkeyAudio.currentTime = 0;
  }
});
