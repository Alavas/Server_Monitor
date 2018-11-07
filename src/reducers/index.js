export const serverReducer = (
	state = {
		Endpoint: '',
		Error: false,
		Servers: { Loading: true },
		Success: false
	},
	action
) => {
	var server
	var index
	var data
	var serverdata
	switch (action.type) {
		case 'LOAD_DATA_SUCCESS':
			state = {
				...state,
				Success: true,
				Servers: action.data
			}
			break
		case 'LOAD_DATA_FAILURE':
			state = {
				...state,
				Servers: { Error: action.err },
				Success: false,
				Error: true
			}
			break
		case 'UPDATE_ENDPOINT':
			state = {
				...state,
				Endpoint: action.endpoint
			}
			break
		case 'UPDATE_DATA_SERVICES':
			server = action.update.server
			index = action.update.index
			data = action.update.data
			serverdata = state.Servers[server].Services
			serverdata[index] = data
			state = {
				...state,
				Servers: {
					...state.Servers,
					[server]: {
						...state.Servers[server],
						Services: serverdata
					}
				}
			}
			break
		case 'UPDATE_DATA_HOSTS':
			server = action.update.server
			index = action.update.index
			data = action.update.data
			serverdata = state.Servers[server].Hosts
			serverdata[index] = data
			state = {
				...state,
				Servers: {
					...state.Servers,
					[server]: {
						...state.Servers[server],
						Hosts: serverdata
					}
				}
			}
			break
		case 'UPDATE_DATA_OPERATIONAL':
			server = action.update.server
			data = action.update.data
			state = {
				...state,
				Servers: {
					...state.Servers,
					[server]: {
						...state.Servers[server],
						Operational: data
					}
				}
			}
			break
		default:
			break
	}
	return state
}
