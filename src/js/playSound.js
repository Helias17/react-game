import options from './options';

const playSound = (type, volume) => {
  const audio = new Audio(options.audio[type]);
  audio.volume = volume || options.volume;
  if (options.sounds) audio.play();
}

export default playSound;