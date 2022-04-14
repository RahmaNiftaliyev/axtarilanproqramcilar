import React from 'react';
import LeftPln from './LeftPln';
import CenterPln from './CenterPln';
import RightPln from './RightPln';
import styles from './chat.module.css';


function ChatApp() {


  return (
    <div className={styles.chatApp}>
      <LeftPln />
      <CenterPln />
      <RightPln />
    </div>
  );
}

export default ChatApp;
