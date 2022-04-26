import React, { useState, useEffect } from 'react';
import styles from './calendar.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import left from './assets/left.png';
import right from './assets/right.png';

const ReactCalendar = () => {
  const [date, onChange] = useState(new Date());
  const [toggle, setToggle] = useState(true);
  const [selected, setSelected] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const handleDarkAndLightThem = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setSelected(date);
    setSelectedMonth(date);
  }, [date]);

  return (
    <div
      className={`${styles.background} ${
        toggle ? styles.background_dark : styles.background_light
      } minHeight`}
    >
      <button
        className={`${styles.theme_button}`}
        onClick={handleDarkAndLightThem}
      >
        {!toggle ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <div className={styles.calendar}>
        {/* !CALENDAR HEADER LEFT AND RIGHT SIDE */}
        <div className={`${styles.calendar_header}`}>
          <div className={styles.calendar_header_left}>
            <img
              src={left}
              alt="arrow-left"
              className={`cursor-pointer`}
              width="55"
            />
            <h3>{selectedMonth.toLocaleString('default', {}).split(',')[0]}</h3>
            <img
              src={right}
              alt="arrow-right"
              className={`cursor-pointer`}
              width="55"
            />
          </div>
          <div className={styles.calendar_header_right}>
            <h3>today</h3>
          </div>
        </div>
        {/* !CALENDAR BODY DAYS AND MONTH */}
        <div className={`${styles.calendar_body}`}>
          <table>
            <thead>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReactCalendar;
