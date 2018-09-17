export const serverReducer = (
    state = {
        "Success": false,
        "Error": false,
        "Servers": {"Loading": true}
    }, 
    action) => {
    var server
    var index
    var data
    var serverdata
    switch (action.type) {
        case "LOAD_DATA_SUCCESS":
            state = {
                ...state,
                "Success": true,
                "Servers": action.data
            }
            break
        case "LOAD_DATA_FAILURE":
            console.log("Error")
            state = {
                ...state,
                "Servers": {"Error": true},
                "Success": false,
                "Error": true}
            break
        case "UPDATE_DATA_SERVICES":
            server = action.update.server
            index = action.update.index
            data = action.update.data
            serverdata = state.Servers[server].Services
            serverdata[index] = data
            state = {
                ...state,
                "Servers": {
                    ...state.Servers,
                    [server]: {
                        ...state.Servers[server],
                        "Services": serverdata
                    }
                }
            }
            break
        case "UPDATE_DATA_HOSTS":
            server = action.update.server
            index = action.update.index
            data = action.update.data
            serverdata = state.Servers[server].Hosts
            serverdata[index] = data
            state = {
                ...state,
                "Servers": {
                    ...state.Servers,
                    [server]: {
                        ...state.Servers[server],
                        "Hosts": serverdata
                    }
                }
            }
            break
        case "UPDATE_DATA_OPERATIONAL":
            server = action.update.server
            data = action.update.data
            state = {
                ...state,
                "Servers": {
                    ...state.Servers,
                    [server]: {
                        ...state.Servers[server],
                        "Operational": data
                    }
                }
            }
        default:
            break
    }
    return state
}