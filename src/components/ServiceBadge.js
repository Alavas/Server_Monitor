import React from 'react'

const ServiceBadge = props => {
	return (
		<span
			className={
				props.svcQty < 1
					? 'hidden'
					: props.allRunning
						? 'new badge green altbadge svcs'
						: 'new badge red altbadge svcs'
			}
			data-badge-caption="Services"
		>
			{props.svcRunning}
		</span>
	)
}

export default ServiceBadge
