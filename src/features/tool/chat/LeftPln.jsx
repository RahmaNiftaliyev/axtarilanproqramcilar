import React, { useState } from 'react';
import styles from './chat.module.css';
import LeftStories from './LeftStories';
import LeftMessages from './LeftMessages';


/*
*  isAdmin:{
            enable:true,
            auths:{
              addUser:() => console.log("user added"),
              removeUser: () => console.log("user removed"),

            }
          }
* */

const LeftPln = () => {


  const [user, setUser] = useState({
    userProfile: {},
    userStories: {},
    userMessages: {
      isGroup: {
        enable: true,
        details: {
          isAdmin: true,
          groupUsers: {},
          removeUser: this.isAdmin ? () => console.log("user removed") : this.isAdmin,
          addUser: this.isAdmin ? () => console.log("user added") : this.isAdmin,
          makeAdmin: this.isAdmin ? () => console.log("make admin") : this.isAdmin
        }
      }
    },
  });


  return (
    <div className={styles.light_bg_chatapp}>
      <LeftStories profile={user.userProfile} stories={user.userStories} />
      <LeftMessages profile={user.userProfile} messages={user.userMessages} />
    </div>
  );
};

export default LeftPln;