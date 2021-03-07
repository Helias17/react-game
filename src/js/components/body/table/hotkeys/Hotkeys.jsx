import React, { useState } from 'react';

const Hotkeys = (props) => {

  let [hotkeysDescVisible, setHotKeysDescVisible] = useState(false);

  const hotKeysClassName = hotkeysDescVisible ? 'hotkeys hotkeys_ontop' : 'hotkeys';

  const showHideHotKeys = () => {
    setHotKeysDescVisible(hotkeysDescVisible ? false : true);
  }

  if (window.matchMedia("(orientation: landscape)").matches) {
    return (
      <div className={hotKeysClassName}>
        <button className="btn btn_small btn_icon-question" onClick={showHideHotKeys}>?</button>
        {hotkeysDescVisible ? <div className="hotkeys__box animate__animated animate__backInUp animate__faster">
          Make bet - numbers 1,2,3,4.<br />
            Remove bet - button "Delete".<br />
          Deal - button "Enter".<br />
          Hit  - button "+" on numpad. <br />
              Stand - button "-"  on numpad.
        </div> : ''}
      </div>
    );
  }

  return null;

}

export default Hotkeys;