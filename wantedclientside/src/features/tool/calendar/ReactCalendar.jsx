/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './calendar.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const ReactCalendar = () => {
  const handleClick = (args) => {
    alert(args.dateStr);
  };

  return (
    <div className={`${styles.background_dark}`}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleClick}
      />
    </div>
  );
};

export default ReactCalendar;
