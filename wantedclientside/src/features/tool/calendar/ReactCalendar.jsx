/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './calendar.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import left from './assets/left.png';
import right from './assets/right.png';
import { useNavigate } from 'react-router-dom';

const ReactCalendar = () => {
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();
  // !365 days of the year
  const [allDays, setAllDays] = useState([]);
  // !per 42 days of calendar

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [Month, setMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [todaysDate, setTodaysDate] = useState(new Date().getDate());
  const [allDaysIn, setAllDaysIn] = useState([]);
  const [newArr, setNewArr] = useState([]);
  const [maxDays, setMaxDays] = useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  const [daysInMonth, setDaysInMonth] = useState(maxDays[currentMonth]);
  const [indexData, setIndexData] = useState(0);
  const [calendar, setCalendarDays] = useState([]);
  const [rendered, setRendered] = useState([]);
  const [weekDate, setWeekDate] = useState(['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']);
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

  const getDaysInMonth = (month, year) => {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  // const renderedDays = newArr.map((arr,index) => {
  //   return(
  //     <tr key={index}>
  //      {
  //         arr.map((day,index) => {
  //           return (
  //             <td key={index}>{day}</td>
  //           )
  //         })
  //      }
  //     </tr>
  //   )
  // })

  // !lIGHT AND DARK MODE BEGINS HERE
  const handleDarkAndLightThem = (e) => {
    setToggle(!toggle);
  };

  const nextMonthSetter = () => {
    let indexValue = indexData;
    let copyData = [...newArr];

    for (let i = 0; i < 4; i++) {
      indexValue++;
      copyData.shift();
      copyData.push(calendar[indexValue]);
    }

    setIndexData(indexValue);

    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
      setDaysInMonth((pre) => (pre = maxDays[currentMonth - 1]));
    } else {
      setCurrentMonth(currentMonth + 1);
      setDaysInMonth((pre) => (pre = maxDays[currentMonth - 1]));
    }
  };

  const previousMonthSetter = () => {
    let indexValue = indexData;
    let copyData = [...newArr];

    for (let i = 0; i < 4; i++) {
      indexValue--;
      copyData.pop();
      copyData.unshift(calendar[indexValue]);
    }

    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
      setDaysInMonth((pre) => (pre = maxDays[currentMonth - 1]));
    } else {
      setCurrentMonth(currentMonth - 1);
      setDaysInMonth((pre) => (pre = maxDays[currentMonth - 1]));
    }
  };

  // !CALENDAR FUNCTION BEGINS HERE

  const checkForLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  // !CALENDAR ROUTING TO IDE SOCIAL MEDIA HOME PAGE AND CHAT APP
  const handleHomePage = () => {
    navigate('/');
  };

  const handleIDE = () => {
    navigate('/codeeditor');
  };

  const handleChatApp = () => {
    navigate('/chat');
  };

  const handleSocialMedia = () => {
    navigate('/explore');
  };

  useEffect(() => {
    let calendarDays = [];
    let days = [];
    let week = [];
    let weekCount = 0;
    let weekDay = 0;
    let daysCount = 0;
    let monthCount = 0;
    let previousDays = [31, 30, 29, 28, 27, 26];
    if (checkForLeapYear(currentYear)) {
      setMaxDays([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    } else {
      setMaxDays([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    }

    setAllDaysIn((pre) => {
      maxDays.map((indexData) => {
        for (let i = 1; i <= indexData; i++) {
          days.push(i);
          if (days.length === 365) {
            for (let j = 0; j < previousDays.length; j++) {
              days.pop();
              days.unshift(previousDays[j]);
            }
          }
        }
        pre = [...days];
      });
      return pre;
    });

    setCalendarDays((pre) => {
      for (let i = 0; i < allDaysIn.length; i++) {
        if (i % 7 === 0) {
          week.push(allDaysIn.slice(i, i + 7));
          weekCount++;
        }
      }
      return week;
    });

    setNewArr((pre) => {
      let betaArr = [];
      let todayBeforeThan = 0;

      for (let i = 0; i < currentMonth; i++) {
        todayBeforeThan += maxDays[i];
        if (currentMonth - 1 === i) {
          todayBeforeThan += todaysDate;
        }
      }
      let trueIndex = Math.floor(todayBeforeThan / 42) * 6;
      let lastIndex = trueIndex + 5;
      setIndexData(lastIndex);
      for (; trueIndex <= lastIndex; trueIndex++) {
        betaArr.push(calendar[trueIndex]);
      }

      return betaArr;
    });
  }, [setCalendarDays, setNewArr, currentMonth, currentYear, calendar, newArr]);

  return (
    <div
      className={`${styles.background} ${
        toggle ? styles.background_dark : styles.background_light
      } minHeight`}
    >
      <div className={`${styles.calendar_container}`}>
        <div className={`${styles.controller_side}`}>
          <div className={`${styles.controller_container}`}>
            <h2>Control Panel</h2>
            <div className={`${styles.control_meetings}`}>
              <div>
                <h3>Your meetings</h3>
                <div>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
            <div className={`${styles.control_create}`}>
              <h3>Create a meeting</h3>
              <div className={`${styles.meeting_editor_container}`}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div>
                      <label htmlFor="from">From</label>
                      <br />
                      <input
                        type="date"
                        name="period"
                        id="period"
                        style={{
                          border: '1px solid #484A53',
                          borderRightColor: 'transparent',
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="to">To</label>
                      <br />
                      <input
                        type="date"
                        name="to"
                        id="to"
                        style={{
                          border: '1px solid #484A53',
                          borderLeftColor: 'transparent',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="reason">Reason</label>
                    <br />
                    <input
                      type="text"
                      id="reason"
                      name="reason"
                      style={{
                        border: '1px solid #484A53',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <br />
                  <input
                    type="text"
                    name="description"
                    id="description"
                    style={{
                      width: '100%',
                      border: '1px solid #484A53',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="location">Location</label>
                  <br />
                  <input
                    type="text"
                    name="location"
                    id="location"
                    style={{
                      width: '100%',
                      border: '1px solid #484A53',
                    }}
                  />
                </div>
                <button
                  style={{
                    backgroundColor: '#4D4D4D',
                    width: '100%',
                    padding: '6px 0',
                    margin: '10px 0',
                    color: 'white',
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.calendar_badge}`}>
          <div className={styles.calendar}>
            <div className={`${styles.calendar_control_panel}`}>
              <div>
                <button onClick={handleHomePage}>Home page</button>
                <button onClick={handleIDE}>IDE</button>
                <button onClick={handleChatApp}>Chat app</button>
                <button onClick={handleSocialMedia}>Social media</button>
              </div>
            </div>
            {/* !CALENDAR HEADER LEFT AND RIGHT SIDE */}
            <div className={`${styles.calendar_header}`}>
              <div className={styles.calendar_header_left}>
                <img
                  src={left}
                  alt="arrow-left"
                  className={`cursor-pointer ${toggle ? '' : styles.calendar_image_dark}`}
                  width="55"
                  onClick={previousMonthSetter}
                />
                <h3 className={`${toggle ? '' : styles.calendar_text_dark}`}>
                  {strmonths[currentMonth]}
                </h3>
                <img
                  src={right}
                  alt="arrow-right"
                  className={`cursor-pointer ${toggle ? '' : styles.calendar_image_dark}`}
                  width="55"
                  onClick={nextMonthSetter}
                />
              </div>
              <div className={styles.calendar_header_right}>
                <h3 className={`${toggle ? '' : styles.calendar_text_dark}`}>{`${todaysDate}/${
                  currentMonth + 1
                }/${currentYear}`}</h3>
              </div>
            </div>
            {/* !CALENDAR BODY DAYS AND MONTH */}
            <div className={`${styles.calendar_body}`}>
              <table cellPadding="6" cellSpacing="6">
                <thead>
                  <tr>{renderedWeekDays}</tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCalendar;
