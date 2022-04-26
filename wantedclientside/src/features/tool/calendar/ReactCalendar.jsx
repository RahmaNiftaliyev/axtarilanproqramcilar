import React, { useState, useEffect } from 'react';
import styles from './calendar.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import left from './assets/left.png';
import right from './assets/right.png';

const ReactCalendar = () => {
  const [date, onChange] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [toggle, setToggle] = useState(true);
  const [selected, setSelected] = useState(new Date());
  const [dayCounter, setDayCounter] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  console.log(dayCounter);

  const handleDarkAndLightThem = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    setSelected(date);
    setSelectedMonth(date);
    setDayCounter([]);

    months.forEach((month, index) => {
      if (index === parseInt(currentMonth)) {
        for (let i = 1; i <= month; i++) {
          setDayCounter((prevState) => [...prevState, i]);
        }
      }
    });
  }, [date, currentMonth]);

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
              className={`cursor-pointer ${
                toggle ? '' : styles.calendar_image_dark
              }`}
              width="55"
            />
            <h3 className={`${toggle ? '' : styles.calendar_text_dark}`}>
              {selectedMonth.toLocaleString('default', {}).split(',')[0]}
            </h3>
            <img
              src={right}
              alt="arrow-right"
              className={`cursor-pointer ${
                toggle ? '' : styles.calendar_image_dark
              }`}
              width="55"
            />
          </div>
          <div className={styles.calendar_header_right}>
            <h3 className={`${toggle ? '' : styles.calendar_text_dark}`}>
              today
            </h3>
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
            <tbody>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= 6 && (
                      <td
                        className={`${toggle ? '' : styles.calendar_text_dark}`}
                      >
                        {day}
                      </td>
                    )
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= 13 &&
                    index > 6 && (
                      <td
                        className={`${toggle ? '' : styles.calendar_text_dark}`}
                      >
                        {day}
                      </td>
                    )
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= 20 &&
                    index > 13 && (
                      <td
                        className={`${toggle ? '' : styles.calendar_text_dark}`}
                      >
                        {day}
                      </td>
                    )
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= 27 &&
                    index > 20 && (
                      <td
                        className={`${toggle ? '' : styles.calendar_text_dark}`}
                      >
                        {day}
                      </td>
                    )
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= dayCounter.length &&
                    index > 27 && (
                      <td
                        className={`${toggle ? '' : styles.calendar_text_dark}`}
                      >
                        {day}
                      </td>
                    )
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReactCalendar;
