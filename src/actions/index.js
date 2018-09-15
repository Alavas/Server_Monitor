export const loadData = () => {
    return dispatch => fetch(`http://192.168.1.70:8888/api/servers`) // Redux Thunk handles these
        .then(res => res.json())
        .then(
            data => dispatch({ type: 'LOAD_DATA_SUCCESS', data }),
            err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
        );
}


