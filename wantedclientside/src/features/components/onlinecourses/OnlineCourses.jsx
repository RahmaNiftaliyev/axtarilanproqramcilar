import React, { useState } from 'react';
import styles from './onlinecourses.module.css';
import ParticlesBg from 'particles-bg';
import { useSelector } from 'react-redux';
import { selectAllCourses } from '../../redux/coursesSlice';
import { BiMessageRoundedDetail, BiNotification, BiCartAlt } from 'react-icons/bi';

const OnlineCourses = () => {
  const courses = useSelector(selectAllCourses);

  const renderedCourses = courses.map((course) => {
    return (
      <option key={course.id} value={course.name}>
        {course.name}
      </option>
    );
  });

  const [search, setSearch] = useState('');
  const [customer, setCustomer] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [instructor, setInstructor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  return (
    <div className={`${styles.online_courses_main_container}`}>
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={20} />
      <div className={`${styles.online_courses_hero_container}`}>
        <div className={`${styles.courses_aside}`}></div>
        {/* Navigation bar  */}
        <div className={`${styles.courses_nav}`}>
          {/* Navigation bar => left section  */}
          <div className={`${styles.courses_nav_left}`}></div>
          {/* Navigation bar => center section  */}
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
              <option value="" selected>
                Filter
              </option>
              {renderedCourses}
            </select>
          </div>
          {/* Navigation bar  => right section */}
          <div className={`${styles.courses_nav_right}`}>
            <button>Create new course</button>
            <div>
            <BiCartAlt
              style={{
                color: 'white',
                fontSize: '1.5rem',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
            <BiMessageRoundedDetail
              style={{
                color: 'white',
                fontSize: '1.5rem',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
            <BiNotification
              style={{
                color: 'white',
                fontSize: '1.5rem',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
            </div>
            <div className={`${styles.profile_pic_user}`}></div>
          </div>
        </div>
        <div className={`${styles.courses_main}`}></div>
        <div className={`${styles.courses_aside_right}`}></div>
      </div>
    </div>
  );
};
export default OnlineCourses;
