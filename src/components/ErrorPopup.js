import React from 'react'

const ErrorPopup = props => {
	return (
		<div className="card errorcard">
			<div className="card-content black-text">
				<span className="card-title">Error</span>
				<p>{props.errormsg}</p>
			</div>
			<div className="card-action black-text">
				{/*eslint-disable-next-line*/}
				<a
					onClick={props.sample}
					className="sample-button waves-effect black waves-light btn"
				>
					View sample data?
				</a>
			</div>
		</div>
	)
}

export default ErrorPopup
