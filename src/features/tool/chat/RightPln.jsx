import React from 'react';
import styles from './chat.module.css';
import { FaTimes } from 'react-icons/fa';
import profile from './assets/img/progile.jpg';

const RightPln = () => {
  return (
    <div className={`${styles.light_bg_chatapp} ${styles.border_left_light}`}>
      <div
        className={`${styles.header} ${styles.border_bottom_light} ${styles.right_pln_header}  d-flex align-items-center`}
      >
        <FaTimes />
        <h3>Contact info</h3>
      </div>
      <div className={`${styles.right_profile} ${styles.border_bottom_light}`}>
        {/* profile photo */}
        <div className={`${styles.profile_photo_124}`}></div>
        {/* profile name and contact information */}
        <h3>Lara Mueller</h3>
        <a href="tel:+49 1522 792358">+49 1522 792358</a>
      </div>
      <div
        className={`${styles.right_info} ${styles.border_bottom_light} ${styles.pl_24} ${styles.pr_24}`}
      >
        <h3>info</h3>
        <p>Spring is coming 🌱</p>
      </div>
      <div
        className={`${styles.right_media_links} ${styles.border_bottom_light} ${styles.pl_24}`}
      >
        <h3>Media, Links and Documents</h3>
        <div className={`${styles.right_media_container}`}></div>
      </div>
      <div
        className={`${styles.right_datas} ${styles.border_bottom_light}`}
      ></div>
    </div>
  );
};

export default RightPln;
