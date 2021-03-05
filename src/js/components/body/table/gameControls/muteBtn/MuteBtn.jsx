import React, { useState } from 'react';
import options from '@js/options';
import audioBackground from '@js/audioBackground';

let prevVolume = 0;

const MuteBtn = () => {

  let [muteState, setMuteState] = useState(0);

  let compClassName = 'btn btn_small btn_sound animate__animated animate__backInRight';
  compClassName = options.muted ? compClassName + ' btn_sound-off' : compClassName;

  return (
    <button className={compClassName} onClick={() => {
      console.log(muteState);
      options.muted = options.muted ? false : true;
      if (options.muted) {
        prevVolume = options.volume;
        options.volume = 0;
      } else {
        options.volume = prevVolume;
      }
      audioBackground.volume();
      setMuteState(muteState + 1);
    }}></button>
  )
}

export default MuteBtn;