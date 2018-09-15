export const serverReducer = (
    state = {
        "Success": false,
        "Error": false,
        "Servers": {"Loading": true}
    }, 
    action) => {
    switch (action.type) {
        case "LOAD_DATA_SUCCESS":
            state = {
                ...state,
                "Success": true,
                "Servers": action.data
            }
            break;
        case "LOAD_DATA_FAILURE":
            console.log("Error")
            state = {
                ...state,
                "Servers": {"Error": true},
                "Success": false,
                "Error": true}
            break;
        default:
            break;
    }
    return state;
};
