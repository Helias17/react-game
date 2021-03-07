import options from './options';

const playSound = (type, volume) => {
  const audio = new Audio(options.audio[type]);
  if (options.muted) {
    audio.volume = 0;
  } else {
    audio.volume = volume || options.volume;
  }
  
  if (options.sounds) audio.play();
}

export default playSound;