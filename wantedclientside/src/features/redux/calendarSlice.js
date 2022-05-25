import { createSlice, nanoid } from '@reduxjs/toolkit';

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
      id: nanoid(),
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
      id: nanoid(),
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
      id: nanoid(),
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
      id: nanoid(),
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
    addCalendar: (state, action) => {
      state.events.push(action.payload);
    },
    removeCalendar: (state, action) => {
      state.events.splice(action.payload, 1);
    },
  },
  extraReducers: {},
});

export const selectAllCalendar = (state) => state.calendar;

export default calendarSlice.reducer;
