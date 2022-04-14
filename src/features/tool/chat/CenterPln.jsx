import React from 'react';
import styles from './chat.module.css';
import { RiSearch2Line } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';

const CenterPln = () => {
  return (
    <div>
      {/*CHAT CENTER HEADER SECTION*/}
      <div
        className={`${styles.header} ${styles.light_bg_chatapp} 
        ${styles.border_bottom_light} ${styles.center_header} 
        d-flex align-items-center justify-content-between`}>
        <div className='d-flex align-items-center'>
          <div className={`${styles.profile_photo_40}`}></div>
          <h3 className='text-white'>Lara Mueller</h3>
        </div>
        <div>
          <RiSearch2Line />
          <BsThreeDotsVertical />
        </div>
      </div>
      {/*CHAT CENTER BODY SECTION*/}
      <div className={`${styles.center_body} ${styles.dark_bg_chatapp}`}>

      </div>
      {/*CHAT CENTER BOTTOM SECTION*/}
      <div className={`${styles.center_bottom} ${styles.light_bg_chatapp} ${styles.border_top_light}`}>

      </div>

    </div>
  );
};

export default CenterPln;