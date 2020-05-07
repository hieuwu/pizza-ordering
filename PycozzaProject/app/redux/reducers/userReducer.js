import { ADDUSER, REMOVEUSER } from '../actions/type';

const initialState = {
    name: 'You have not logged in',
    email: '',
    phone: '',
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDUSER:
            return action.user;
        case REMOVEUSER: {
            
            return {
                name: 'You have not logged in',
                email: '',
                phone: '',
            }
        }
           
        default:
            return state;
    }
};

export default userReducer;