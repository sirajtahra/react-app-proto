const initialState = {
    selectedPost: null,
    list: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS': {
            return state = {
                ...state,
                list: action.payload
            }
        }
        default: return state
    }
};

export default postReducer;