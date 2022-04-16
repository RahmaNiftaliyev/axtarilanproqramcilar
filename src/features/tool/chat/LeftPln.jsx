import React, { useState } from 'react';
import styles from './chat.module.css';
import LeftStories from './LeftStories';
import LeftMessages from './LeftMessages';

const LeftPln = () => {
  const [user, setUser] = useState({
    userProfile: { name: '', avatar: '', id: '' },
    userStories: { stories: [], id: '' },
    userMessages: { messages: [], unread: 0, id: '' },
  });

  return (
    <div className={`${styles.light_bg_chatapp} ${styles.border_right_light}`}>
      <div
        className={`${styles.left_header_profile} ${styles.border_bottom_light}`}
      ></div>
      <LeftStories profile={user.userProfile} stories={user.userStories} />
      <LeftMessages profile={user.userProfile} messages={user.userMessages} />
    </div>
  );
};

export default LeftPln;
