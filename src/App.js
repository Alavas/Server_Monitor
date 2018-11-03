import React, { Component } from 'react'
import Servers from './containers/servers'
import Footer from './components/footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Servers />
				<Footer />
			</div>
		)
	}
}

export default App
