import React from 'react';
import styles from './chat.module.css';
import { RiSearch2Line } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import profile from './assets/img/progile.jpg';
import smile from './assets/img/emotion-happy-line.png';
import group from './assets/img/Group.png';

const CenterPln = () => {

  const [emojiEnable, setEmojiEnable] = React.useState(false);

  return (
    <div>
      {/*CHAT CENTER HEADER SECTION*/}
      <div
        className={`${styles.header} ${styles.light_bg_chatapp} 
        ${styles.border_bottom_light} ${styles.center_header} 
        d-flex align-items-center justify-content-between`}>
        <div className='d-flex align-items-center'>
          <div className={`${styles.profile_photo_40}`}>
            <img src={profile} width='40' alt='' />
          </div>
          <h3 className='text-white mb-0'>Lara Mueller</h3>
        </div>
        <div className={`${styles.center_header_icon_container} d-flex justify-content-between`}>
          <RiSearch2Line />
          <BsThreeDotsVertical />
        </div>
      </div>
      {/*CHAT CENTER BODY SECTION*/}
      <div className={`${styles.center_body} ${styles.dark_bg_chatapp}`}>

      </div>
      {/*CHAT CENTER BOTTOM SECTION*/}
      <div
        className={`${styles.center_bottom} ${styles.light_bg_chatapp} ${styles.border_top_light} d-flex align-items-center`}>
        {
          emojiEnable
          &&
          <Picker
            set='apple' style={{ position: 'absolute', bottom: '70px', left: '26px' }}
            title='Have a good day'
            emoji='smile'
            theme='dark'
            i18n={{ search: 'Search', categories: { search: 'Résultats de recherche', recent: 'Récents' } }}
          />
        }
        <div className={`${styles.center_bottom_emoji_container} d-flex justify-content-between`}>
          <img src={smile} alt='emoji smile' className='cursor-pointer' onClick={() => setEmojiEnable(prev => !prev)} />
          <img src={group} alt='group link tag img' className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default CenterPln;