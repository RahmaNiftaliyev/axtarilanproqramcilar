import React, { useState } from 'react';
import styles from './onlinecourses.module.css';
import ParticlesBg from 'particles-bg';

const OnlineCourses = () => {
  const [search, setSearch] = useState('');

  return (
    <div className={`${styles.online_courses_main_container}`}>
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={20} />
      <div className={`${styles.online_courses_hero_container}`}>
        <div className={`${styles.courses_aside}`}></div>
        {/* Navigation bar  */}
        <div className={`${styles.courses_nav}`}>
          <div className={`${styles.courses_nav_left}`}></div>
          <div className={`${styles.courses_nav_center}`}>
  
           <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Files..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select name="" id="">
              <option value="" selected>Filter</option>
            </select>

          </div>
          <div className={`${styles.courses_nav_right}`}></div>
        </div>
        <div className={`${styles.courses_main}`}></div>
        <div className={`${styles.courses_aside_right}`}></div>
      </div>
    </div>
  );
};
export default OnlineCourses;
