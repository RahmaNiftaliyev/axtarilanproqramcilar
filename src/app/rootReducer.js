import usersReducer from './../features/redux/usersSlice';
import developersReducer from './../features/redux/developersSlice';
import customersReducer from './../features/redux/customersSlice';
import gendersReducer from './../features/redux/gendersSlice';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    users:usersReducer,
    developers:developersReducer,
    customers:customersReducer,
    genders:gendersReducer
}