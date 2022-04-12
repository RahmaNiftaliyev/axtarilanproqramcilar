
import usersReducer from "./../features/redux/usersSlice";
import developersReducer from "./../features/redux/developersSlice";
import customersReducer from "./../features/redux/customersSlice";
import gendersReducer from "./../features/redux/gendersSlice";
import registerReducer from "./../features/redux/registerSlice";
import designersReducer from "./../features/redux/designersSlice";
import postsReducer from "./../features/redux/postsSlice";
import notificationsReducer from "./../features/redux/notificationsSlice";
import emailsReducer from "./../features/redux/emailsSlice";

export default {
  users: usersReducer,
  developers: developersReducer,
  customers: customersReducer,
  genders: gendersReducer,
  register: registerReducer,
  designers: designersReducer,
  posts: postsReducer,
  notifications: notificationsReducer,
  emails: emailsReducer,
};
