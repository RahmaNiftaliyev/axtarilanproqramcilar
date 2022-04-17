import React, { useState } from 'react';
import styles from './chat.module.css';
import LeftStories from './LeftStories';
import LeftMessages from './LeftMessages';
import profile from './assets/img/progile.jpg';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiChatNewLine } from 'react-icons/ri';
import { RiSearch2Line } from 'react-icons/ri';

const LeftPln = () => {
  const [user, setUser] = useState({
    userProfile: { name: '', avatar: '', id: '' },
    userStories: { stories: [], id: '' },
    userMessages: { messages: [], unread: 0, id: '' },
  });

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={`${styles.light_bg_chatapp} ${styles.border_right_light}`}>
      <div
        className={`${styles.left_header_profile} ${styles.border_bottom_light}`}
      >
        <div className="d-flex justify-content-between">
          <div className={`${styles.profile_photo_40}`}>
            <img src={profile} alt="profile avatar user" width={40} />
          </div>
          <div className={`${styles.left_header_icon_container}`}>
            <RiChatNewLine />
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className={`${styles.left_header_search_box}`}>
          <input
            type="search"
            name="search"
            id="search"
            aria-labelledby="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <RiSearch2Line />
        </div>
      </div>

      <LeftStories profile={user.userProfile} stories={user.userStories} />
      <LeftMessages profile={user.userProfile} messages={user.userMessages} />
    </div>
  );
};

export default LeftPln;
