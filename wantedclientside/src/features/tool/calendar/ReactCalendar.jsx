/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './calendar.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import left from './assets/left.png';
import right from './assets/right.png';
import { useNavigate } from 'react-router-dom';

const ReactCalendar = () => {
  const [toggle, setToggle] = useState(true);
  // !365 days of the year
  const [allDays, setAllDays] = useState([]);
  // !per 42 days of calendar
  const [oneView, setOnewView] = useState([]);
  const [impINdex, setImpIndex] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [todaysDate, setTodaysDate] = useState(new Date().getDate());
  const [trustedIndex, setTrustedIndex] = useState();
  const [maxDays, setMaxDays] = useState([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
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

  const rendered42Days = (paramsImpIndex) => {
    return paramsImpIndex.map((day, index) => {
      return (
        <tr key={index}>
          {day.map((daymin, index) => {
            return (
              <td
                value={daymin}
                key={index}
                className={`${daymin === todaysDate ? `${styles.active_calendar}` : ''}`}
              >
                {daymin}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  // !lIGHT AND DARK MODE BEGINS HERE
  const handleDarkAndLightThem = (e) => {
    setToggle(!toggle);
  };

  const nextMonthSetter = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
      setTodaysDate((pre) => {
        let maximumNumber = maxDays[currentMonth];
        let copyData = pre;
        if (maximumNumber - copyData > 7) {
          return pre + 7;
        } else {
          let newData = maximumNumber - copyData;
          let newMonthsDate = 7 - newData;
          return newMonthsDate;
        }
      });
    }
  };

  const previousMonthSetter = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
    } else {
      setTodaysDate((pre) => {
        setCurrentMonth(currentMonth - 1);
        let maximumNumber = maxDays[currentMonth];
        let copyData = pre;
        if (copyData - 7 > 0) {
          return pre - 7;
        } else {
          let newData = copyData - 7;
          let newMonthsDate = maximumNumber - newData;
          return newMonthsDate;
        }
      });
    }
  };

  // !CALENDAR FUNCTION BEGINS HERE

  const navigate = useNavigate();

  const checkForLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  const setNumberOfDays = (year, month) => {
    let numberOfDays;
    if (month === 1) {
      numberOfDays = checkForLeapYear(year) ? 29 : 28;
    } else {
      numberOfDays = maxDays[month];
    }
    return numberOfDays;
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
    setCurrentMonth(new Date().getMonth());
    let max42ForLoop = [];
    let All42ArraysInside = [];
    let todayCounter = 0;
    let trueIndexed42 = [];
    let sevenArr = [];
    let sevenTotalArr = [];

    let previousYearsDays = [31, 30, 29, 28, 27, 26];

    setAllDays((prevoiusValue) => {
      let newA = [...prevoiusValue];
      newA = newA.length > 0 ? [] : [];
      maxDays.forEach((month) => {
        for (let i = 1; i <= month; i++) {
          newA.push(i);
          if (newA.length === 365) {
            for (let i = 0; i < previousYearsDays.length; i++) {
              newA.pop();
              newA.unshift(previousYearsDays[i]);
            }
          }
        }
      });

      if (newA.length === 365) {
        for (let i = 0; i < newA.length; i++) {
          max42ForLoop.push(newA[i]);
          if (max42ForLoop.length === 42) {
            All42ArraysInside.push(max42ForLoop);
            if (All42ArraysInside.length == 8) {
              setOnewView(All42ArraysInside);
              for (let i = 0; i < maxDays.length; i++) {
                if (i < currentMonth) {
                  todayCounter += maxDays[i];
                } else {
                  todayCounter = todayCounter + todaysDate;
                  todayCounter = Math.floor(todayCounter / 42);
                  setTrustedIndex(todayCounter);
                  trueIndexed42 = oneView[trustedIndex];
                  for (let i = 0; i < trueIndexed42.length; i++) {
                    sevenArr.push(trueIndexed42[i]);
                    if (sevenArr.length === 7) {
                      sevenTotalArr.push(sevenArr);
                      if (i === 41) {
                        setImpIndex(sevenTotalArr);
                      }
                      sevenArr = [];
                    }
                  }
                  break;
                }
              }
            }
            max42ForLoop = [];
          }
        }
      }

      return newA;
    });
  }, [currentMonth, trustedIndex]);

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
                  new Date().getMonth() + 1
                }/${new Date().getFullYear()}`}</h3>
              </div>
            </div>
            {/* !CALENDAR BODY DAYS AND MONTH */}
            <div className={`${styles.calendar_body}`}>
              <table cellPadding="6" cellSpacing="6">
                <thead>
                  <tr>{renderedWeekDays}</tr>
                </thead>
                <tbody>{rendered42Days(impINdex)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCalendar;
