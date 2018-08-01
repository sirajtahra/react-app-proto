const initialState = {
    isLoggedIn: false,
    name: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME': {
            state = {
                ...state,
                name: action.payload
            }
            break;
        }
        default: return state
    }
};

export default userReducer;