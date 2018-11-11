import sample from '../sample.json'

export const dataLoad = endpoint => {
	return dispatch =>
		fetch(`http://${endpoint}/api/servers`)
			.then(res => res.json())
			.then(
				data => dispatch(dataSuccess(data)),
				err => dispatch(dataFailure(err))
			)
}

export const dataSample = () => dispatch => {
	dispatch({
		type: 'UPDATE_ENDPOINT',
		endpoint: 'test-server.test-domain.com'
	})
	dispatch(dataSuccess(sample))
}

export const dataSuccess = data => {
	return {
		type: 'LOAD_DATA_SUCCESS',
		data
	}
}

export const dataFailure = err => {
	return {
		type: 'LOAD_DATA_FAILURE',
		err
	}
}

export const dataEndpoint = endpoint => (dispatch, getState) => {
	dispatch({
		type: 'UPDATE_ENDPOINT',
		endpoint
	})
	const url = getState().Endpoint
	dispatch(dataLoad(url))
}
