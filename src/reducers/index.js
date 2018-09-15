export const serverReducer = (
    state = {}, 
    action) => {
    switch (action.type) {
        case "LOAD_DATA_SUCCESS":
            console.log(action.data)
            state = action.data
            break;
        case "LOAD_DATA_FAILURE":
            break;
        default:
            break;
    }
    return state;
};
