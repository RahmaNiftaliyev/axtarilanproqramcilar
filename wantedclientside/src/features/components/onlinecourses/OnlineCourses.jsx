import React, { useState } from 'react';
import styles from './onlinecourses.module.css';
import ParticlesBg from 'particles-bg';
import { useSelector } from 'react-redux';
import { selectAllCourses } from '../../redux/coursesSlice';

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
            <button></button>
          </div>
        </div>
        <div className={`${styles.courses_main}`}></div>
        <div className={`${styles.courses_aside_right}`}></div>
      </div>
    </div>
  );
};
export default OnlineCourses;
