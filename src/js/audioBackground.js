import options from './options';

const track = new Audio(options.audio.track1);

const audioBackground = {
  audio: null,
  play() {
    console.log(options.audio.track1);
    this.audio = track;
    this.audio.volume = options.volume;
    this.audio.loop = true;
    this.audio.play();
  },
  stop() {
    this.audio.pause();
  },
  volume() {
    this.audio.volume = options.volume;
  }

}

export default audioBackground;