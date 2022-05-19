import { createSlice } from '@reduxjs/toolkit';
import dateFns from 'date-fns';
import shortid from 'shortid';

const initialState = {
  currentDate: new Date(),
  week: new Date(),
  month: new Date(),
  selectedDate: null,
  displayingMonth: true,
  creatingNewEvent: false,
  departments: [
    { name: 'Billing', color: '#d54' },
    { name: 'Marketing', color: '#ea4' },
    { name: 'IT', color: '#87b' },
    { name: 'Finance', color: '#4a5' },
  ],
  newEvent: {
    title: '',
    desc: '',
    location: '',
    link: '',
    startDate: new Date(),
    endDate: new Date(),
    allDay: false,
    department: {},
  },
  defaultEvent: {
    title: '',
    desc: '',
    location: '',
    link: '',
    startDate: new Date(),
    endDate: new Date(),
    allDay: false,
    department: {},
  },
  events: [
    {
      id: shortid.generate(),
      title: 'Event 1',
      desc: 'This is the description of the event',
      location: '',
      link: '',
      startDate: new Date('2020-03-30T08:00:00'),
      endDate: new Date('2020-03-30T09:00:00'),
      startTime: '08:00',
      endTime: '09:00',
      department: 'IT',
    },
    {
      id: shortid.generate(),
      title: 'Event 2',
      desc: 'This is the description of the event',
      location: '',
      link: '',
      startDate: new Date('2020-03-30T09:00:00'),
      endDate: new Date('2020-03-30T10:00:00'),
      startTime: '09:00',
      endTime: '10:00',
      department: 'IT',
    },
    {
      id: shortid.generate(),
      title: 'Event 3',
      desc: 'This is the description of the event',
      location: '',
      link: '',
      startDate: new Date('2020-03-30T10:00:00'),
      endDate: new Date('2020-03-30T11:00:00'),
      startTime: '10:00',
      endTime: '11:00',
      department: 'IT',
    },
    {
      id: shortid.generate(),
      title: 'Event 4',
      desc: 'This is the description of the event',
      location: '',
      link: '',
      startDate: new Date('2020-03-30T11:00:00'),
      endDate: new Date('2020-03-30T12:00:00'),
      startTime: '11:00',
      endTime: '12:00',
      department: 'IT',
    },
  ],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    changeMonth: (state, action) => {
      return {
        ...state,
        month: dateFns.addMonths(state.month, action.payload.direction),
        week: dateFns.addMonths(state.month, action.payload.direction),
      };
    },
    changeWeek: (state, action) => {
      return {
        ...state,
        week: dateFns.addWeeks(state.week, action.payload.direction),
        month: dateFns.addWeeks(state.week, action.payload.direction),
      };
    },
    changeDisplay: (state, action) => {
      return {
        ...state,
        displayingMonth: action.payload.month,
      };
    },
    toggleNewEventModal: (state, action) => {
      return { ...state, creatingNewEvent: !state.creatingNewEvent };
    },
    handleEventChange: (state, action) => {
      return {
        ...state,
        newEvent: {
          ...state.newEvent,
          [action.payload.key]: action.payload.value,
        },
      };
    },
    addEvent: (state, action) => {
      let newEvents = [...state.events];
      const newEventWithId = { ...state.newEvent };
      newEventWithId.id = shortid.generate();
      newEvents.push(newEventWithId);
      const newState = {
        ...state,
        events: newEvents,
        newEvent: state.defaultEvent,
      };
      return newState;
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
  },
  extraReducers: {},
});

export const {
  changeMonth,
  changeWeek,
  changeDisplay,
  toggleNewEventModal,
  handleEventChange,
  addEvent,
  removeEvent,
} = calendarSlice.actions;

export const selectAllCalendar = (state) => state.calendar;

export default calendarSlice.reducer;
