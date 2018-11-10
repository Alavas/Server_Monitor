import React, { Component } from 'react'
import { connect } from 'react-redux'
import Servers from './components/Servers'
import Footer from './components/Footer'
import { dataLoad, dataEndpoint } from './actions'
import { getCookie } from './utilities'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			endpoint: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	componentWillMount() {
		let endpoint = getCookie('endpoint')
		if (endpoint === '') {
			endpoint = 'test-server.test-domain.com'
		}
		this.setState({ endpoint })
		this.props.dataEndpoint(endpoint)
	}
	handleChange(e) {
		this.setState({
			endpoint: e.target.value
		})
		console.log(e.target.value)
	}

	render() {
		return (
			<div className="App">
				<Servers
					error={this.props.error}
					loading={this.props.loading}
					servers={this.props.servers}
					errormsg={this.props.errormsg}
				/>
				<Footer
					endpoint={this.state.endpoint}
					handleChange={this.handleChange}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dataLoad: endpoint => {
			dispatch(dataLoad(endpoint))
		},
		dataEndpoint: endpoint => {
			dispatch(dataEndpoint(endpoint))
		}
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		endpoint: state.Endpoint,
		loading: state.Success,
		servers: state.Servers,
		error: state.Error,
		errormsg: state.ErrorMsg
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
