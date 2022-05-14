import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    selectIds: (state) => state.ids,
    sortComparer: (preCourse, nextCourse) => preCourse.id.localeCompare(nextCourse.id),
  };
};

const coursesAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  singleCourse: {},
  courses: {
    ids: ['courseId1', 'courseId2', 'courseId3'],
    entities: {
      courseId1: {
        id: 'courseId1',
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        authorId: 'authorId1',
        length: '20',
        category: 'Front-End',
        tags: ['react', 'javascript', 'front-end'],
        imageUrl: 'https://picsum.photos/200/300?random=1',
        lessons: {
          ids: ['lessonId1', 'lessonId2'],
          entities: {
            lessonId1: {
              id: 'lessonId1',
              name: 'lesson1',
              description: 'lesson1 description',
              courseId: 'courseId1',
              duration: '2',
            },
            lessonId2: {
              id: 'lessonId2',
              name: 'lesson2',
              description: 'lesson2 description',
              courseId: 'courseId1',
              duration: '2',
            },
          },
        },
      },
      courseId2: {
        id: 'courseId2',
        name: 'Angular',
        description: 'Angular is a JavaScript library for building user interfaces.',
        authorId: 'authorId1',
        length: '20',
        category: 'Front-End',
        tags: ['angular', 'javascript', 'front-end'],
        imageUrl: 'https://picsum.photos/200/300?random=1',
        lessons: {
          ids: ['lessonId1', 'lessonId2'],
          entities: {
            lessonId1: {
              id: 'lessonId1',
              name: 'lesson1',
              description: 'lesson1 description',
              courseId: 'courseId1',
              duration: '2',
            },
            lessonId2: {
              id: 'lessonId2',
              name: 'lesson2',
              description: 'lesson2 description',
              courseId: 'courseId1',
              duration: '2',
            },
          },
        },
      },
      courseId3: {
        id: 'courseId3',
        name: 'Vue',
        description: 'Vue is a JavaScript library for building user interfaces.',
        authorId: 'authorId1',
        length: '20',
        category: 'Front-End',
        tags: ['vue', 'javascript', 'front-end'],
        imageUrl: 'https://picsum.photos/200/300?random=1',
        lessons: {
          ids: ['lessonId1', 'lessonId2'],
          entities: {
            lessonId1: {
              id: 'lessonId1',
              name: 'lesson1',
              description: 'lesson1 description',
              courseId: 'courseId1',
              duration: '2',
            },
            lessonId2: {
              id: 'lessonId2',
              name: 'lesson2',
              description: 'lesson2 description',
              courseId: 'courseId1',
              duration: '2',
            },
          },
        },
      },
    },
  },
};

const sliceInvoker = () => {
  return {
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: {},
  };
};

const coursesSlice = createSlice(sliceInvoker());

export const {
  selectIds: selectCourseIds,
  selectEntities: selectCourseEntities,
  selectAll: selectAllCourses,
  selectTotal: selectTotalCourses,
} = coursesAdapter.getSelectors((state) => state.courses.courses);

export default coursesSlice.reducer;
