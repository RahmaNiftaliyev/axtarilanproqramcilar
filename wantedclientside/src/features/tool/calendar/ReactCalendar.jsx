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
  const [stringMonth, setStringMonth] = useState('');
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
  const [events, setEvents] = useState([]);

  const changeMonth = (direction) => {
    direction === 'left'
      ? setCurrentMonth(currentMonth - 1)
      : setCurrentMonth(currentMonth + 1);
    setStringMonth(strmonths[currentMonth]);
  };

  const handleDarkAndLightThem = (e) => {
    setToggle(!toggle);
    e.target.classList.add();
    if (
      toggle &&
      e.target.classList.indexOf(`${styles.calendar_text_dark}`) !== -1
    ) {
      e.target.classList.remove(`${styles.calendar_text_dark}`);
    } else {
      e.target.classList.add(`${styles.calendar_text_dark}`);
    }

    if (events) {
      events.forEach((event) => {
        event.targetSpace.title = event.message;
        event.targetSpace.classList.add(`${styles.calendar_event_class}`);
        console.log(event);
      });
    }
  };

  const userEventsController = (e) => {
    const customReminderMessage = prompt('Enter your reminder message', '');

    if (customReminderMessage.length > 0) {
      setEvents([
        ...events,
        {
          message: customReminderMessage,
          date: selected,
          targetSpace: e.target,
        },
      ]);
      e.target.classList.add(`${styles.calendar_event_class}`);
      e.target.title = events[events.length - 1].message;
    }
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
          setStringMonth(strmonths[currentMonth]);
        }
      }
    });
  }, [currentMonth, date, strmonths]);

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
              onClick={changeMonth.bind(this, 'left')}
            />
            <h3 className={`${toggle ? '' : styles.calendar_text_dark}`}>
              {stringMonth}
            </h3>
            <img
              src={right}
              alt="arrow-right"
              className={`cursor-pointer ${
                toggle ? '' : styles.calendar_image_dark
              }`}
              width="55"
              onClick={changeMonth.bind(this, 'right')}
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
          <table cellPadding="6" cellSpacing="6">
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
                    index <= 6 && <td onClick={userEventsController}>{day}</td>
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= 13 &&
                    index > 6 && <td onClick={userEventsController}>{day}</td>
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= 20 &&
                    index > 13 && <td onClick={userEventsController}>{day}</td>
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= 27 &&
                    index > 20 && <td onClick={userEventsController}>{day}</td>
                  );
                })}
              </tr>
              <tr>
                {dayCounter.map((day, index) => {
                  return (
                    index <= dayCounter.length &&
                    index > 27 && <td onClick={userEventsController}>{day}</td>
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
