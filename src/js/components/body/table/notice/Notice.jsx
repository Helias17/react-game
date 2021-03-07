import React from 'react';

const Notice = (props) => {

  const compClassName = props.noticeState.visible ? 'notice animate__animated animate__zoomIn animate__faster' : 'notice notice_hidden';

  return (
    <p className={compClassName}>{props.noticeText}</p>
  );
}

export default Notice;