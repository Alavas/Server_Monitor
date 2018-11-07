import React from 'react'

const Footer = props => {
	return (
		<div className="app-footer">
			<div className="row">
				<div className="input-field col s4">
					<input
						value={props.endpoint}
						onChange={props.handleChange}
						type="text"
					/>
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
