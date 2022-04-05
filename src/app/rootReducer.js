import usersReducer from './../features/redux/usersSlice';
import developersReducer from './../features/redux/developersSlice';
import customersReducer from './../features/redux/customersSlice';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    users:usersReducer,
    developers:developersReducer,
    customers:customersReducer
}