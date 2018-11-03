import React from 'react'
import { getCookie } from '../utilities'

let endpoint = getCookie('endpoint')
if (endpoint === '') {
	endpoint = 'test-server.test-domain.com'
}

const Footer = () => {
	return (
		<div className="app-footer">
			<div className="row">
				<div className="input-field col s4">
					<input value={endpoint} type="text" />
					<label
						style={{
							color: 'black',
							fontSize: '17px',
							fontWeight: 'bold'
						}}
						className="active"
					>
						End Point
					</label>
				</div>
				<a
					className="brand-logo right footer-logo"
					href="https://github.com/Alavas/Server_Monitor"
				>
					Server Monitor
				</a>
			</div>
		</div>
	)
}

export default Footer
