/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './calendar.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import left from './assets/left.png';
import right from './assets/right.png';

const ReactCalendar = () => {
  const [toggle, setToggle] = useState(true);
  // !365 days of the year
  const [allDays, setAllDays] = useState([]);
  // !per 42 days of calendar
  const [oneView, setOnewView] = useState([]);
  const [impINdex, setImpIndex] = useState([]);

  const [weekDate, setWeekDate] = useState(['Sun', 'Mon', 'Tue', 'Wen', 'Thur', 'Fri', 'Sat']);
  const [strmonths, setStrmonths] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);

  const renderedWeekDays = weekDate.map((day, index) => {
    return <th key={index}>{day}</th>;
  });

  // !lIGHT AND DARK MODE BEGINS HERE
  const handleDarkAndLightThem = (e) => {
    setToggle(!toggle);
  };



  useEffect(() => {
    let today = new Date().getMonth();
    let maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let newArr = [];
    let newArr2 = [];
    let todayCounter = 0;
    let settedArr = [];

    setAllDays((prevoiusValue) => {
      let newA = [...prevoiusValue];
      newA = newA.length > 0 ? [] : [];
      maxDays.forEach((month) => {
        for (let i = 1; i <= month; i++) {
          newA.push(i);
        }
      });

      if (newA.length === 365) {
        for (let i = 0; i < newA.length; i++) {
          newArr.push(newA[i]);
          if (newArr.length === 42) {
            newArr2.push(newArr);
            if (newArr2.length == 8) {
              setOnewView(newArr2);
            }
            newArr = [];
          }
        }
      }

      return newA;
    });
  }, []);

  return (
    <div
      className={`${styles.background} ${
        toggle ? styles.background_dark : styles.background_light
      } minHeight`}
    >
      <button className={`${styles.theme_button}`} onClick={handleDarkAndLightThem}>
        {!toggle ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <div className={styles.calendar}>
        {/* !CALENDAR HEADER LEFT AND RIGHT SIDE */}
        <div className={`${styles.calendar_header}`}>
          <div className={styles.calendar_header_left}>
            <img
              src={left}
              alt="arrow-left"
              className={`cursor-pointer ${toggle ? '' : styles.calendar_image_dark}`}
              width="55"
            />
            <h3 className={`${toggle ? '' : styles.calendar_text_dark}`}></h3>
            <img
              src={right}
              alt="arrow-right"
              className={`cursor-pointer ${toggle ? '' : styles.calendar_image_dark}`}
              width="55"
            />
          </div>
          <div className={styles.calendar_header_right}>
            <h3 className={`${toggle ? '' : styles.calendar_text_dark}`}>today</h3>
          </div>
        </div>
        {/* !CALENDAR BODY DAYS AND MONTH */}
        <div className={`${styles.calendar_body}`}>
          <table cellPadding="6" cellSpacing="6">
            <thead>
              <tr>{renderedWeekDays}</tr>
            </thead>
            <tbody>{}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReactCalendar;
