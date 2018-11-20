import React, { Component } from 'react'
import { connect } from 'react-redux'
import Servers from './components/Servers'
import Footer from './components/Footer'
import { dataLoad, dataEndpoint, dataSample } from './actions'
import { getCookie } from './utilities'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			endpoint: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.updateEndpoint = this.updateEndpoint.bind(this)
		this.sampleEndpoint = this.sampleEndpoint.bind(this)
		this.enterKey = this.enterKey.bind(this)
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
	}

	updateEndpoint() {
		this.props.dataEndpoint(this.state.endpoint)
		document.cookie = `endpoint=${this.state.endpoint}`
	}

	enterKey(event) {
		var code = event.keyCode || event.which
		if (code === 13) {
			this.updateEndpoint()
		}
	}

	sampleEndpoint() {
		this.setState(
			{
				endpoint: 'test-server.test-domain.com'
			},
			() => this.props.dataSample()
		)
	}

	render() {
		return (
			<div className="app">
				<p style={{ margin: '0px', visibility: 'hidden' }}>?</p>
				<Servers
					error={this.props.error}
					loaded={this.props.loaded}
					servers={this.props.servers}
					errormsg={this.props.errormsg}
					sample={this.sampleEndpoint}
				/>
				<Footer
					endpoint={this.state.endpoint}
					handleChange={this.handleChange}
					updateEndpoint={this.updateEndpoint}
					enterKey={this.enterKey}
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
		},
		dataSample: () => {
			dispatch(dataSample())
		}
	}
}

const mapStateToProps = state => {
	return {
		endpoint: state.Endpoint,
		loaded: state.Success,
		servers: state.Servers,
		error: state.Error,
		errormsg: state.ErrorMsg
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
