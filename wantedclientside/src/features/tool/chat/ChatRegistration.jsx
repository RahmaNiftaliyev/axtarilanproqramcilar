import React from 'react';
import styles from './chat.module.css';

const ChatRegistration = () => {
  return (
    <div className={`${styles.chat_register_background}`}>
      <div className={`${styles.social_buttons_side}`}></div>
      <div className={`${styles.form_section_side}`}>
        <form className={`${styles.chat_register_form}`} autoComplete={false}>
          <h2>Sign Up</h2>
          <p>Get started absolutely free</p>
          <div className={`${styles.form_group}`}>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="email" required autoComplete='off' />
          </div>
          <div
            className={`${styles.form_group}`}
            style={{
              marginTop: '36px',
            }}
          >
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" name="password" required  />
          </div>
          <div
            className={`${styles.form_group} d-flex align-items-center`}
            style={{
              marginTop: '36px',
              flexDirection: 'row',
              paddingLeft: '15%',
              paddingRight: '15%',
            }}
          >
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              aria-labelledby="agreement"
              required
              checked={false}
            />
            <label
              htmlFor="agreement"
              style={{
                marginLeft: '9px',
                textAlign: 'justify',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '18px',
              }}
            >
              Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and default Notification Settings
            </label>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default ChatRegistration;
