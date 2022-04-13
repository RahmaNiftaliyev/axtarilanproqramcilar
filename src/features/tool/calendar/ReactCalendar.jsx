import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  withDateSelection,
  withKeyboardSupport,
  Calendar,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
const ReactCalendar = () => {
  return (
    <div>
      <InfiniteCalendar
        locale={{
          weekStartsOn: 1,
        }}
        Component={withDateSelection(withKeyboardSupport(Calendar))}
        selected={new Date()}
        width={window.innerWidth <= 650 ? window.innerWidth : "100%"}
        height={window.innerHeight}
        rowHeight={70}
        onSelect={function (date) {
          alert('You selected: ' + (date + ' ddd, MMM Do YYYY'));
        }}
        className={`react-wanted-calendar`}
      />
    </div>
  );
};

export default ReactCalendar;
