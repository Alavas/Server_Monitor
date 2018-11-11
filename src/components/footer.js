import React from 'react'

const Footer = props => {
	return (
		<div className="app-footer">
			<div className="row">
				<div className="col">
					{/*eslint-disable-next-line*/}
					<a
						onClick={props.updateEndpoint}
						className="save-button waves-effect black waves-light btn"
					>
						<i className="material-icons left">save</i>
						Save
					</a>
				</div>
				<div className="input-field col s4">
					<input
						value={props.endpoint}
						onChange={props.handleChange}
						onKeyUp={props.enterKey}
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
				<div>
					<a
						className="brand-logo right footer-logo"
						href="https://github.com/Alavas/Server_Monitor"
					>
						Server Monitor
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
