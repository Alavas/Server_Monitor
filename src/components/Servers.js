import React from 'react'
import ServiceBadge from './ServiceBadge'
import ErrorPopup from './ErrorPopup'
import _ from 'lodash'

const Servers = props => {
	if (props.error) {
		return (
			<div className="errorpopup">
				<ErrorPopup errormsg={props.errormsg} />
			</div>
		)
	} else if (props.loading) {
		let data = props.servers
		let servers = Object.keys(data)
		return (
			<div id="serverList" className="serverlist">
				<ul className="collapsible">
					{servers.map((x, index) => {
						let server = data[x].HostName
						let svcQty = data[x].Services.length
						let svcRun = _.countBy(data[x].Services, 'Running').true || 0
						let allRunning = svcRun === svcQty
						let svcRunning = svcQty > 0 ? `${svcRun}/${svcQty}` : null
						let operational = data[x].Operational
						let services = data[x].Services.map((service, index) => {
							return (
								<div key={index} className="collapsible-body">
									<i
										className={
											service.Running
												? 'material-icons icon-green service'
												: 'material-icons icon-red service'
										}
									>
										{service.Running
											? 'check_circle_outline'
											: 'highlight_off'}
									</i>
									<span style={{ marginLeft: '10px' }}>
										{service.Description}
									</span>
								</div>
							)
						})
						let hosts = data[x].Hosts.map((host, index) => {
							return (
								<span
									key={index}
									className={
										!host.Online
											? index === 0
												? 'new badge red'
												: 'new badge red altbadge'
											: index === 0
												? 'new badge green'
												: 'new badge green altbadge'
									}
									data-badge-caption={host.Name}
								/>
							)
						})
						return (
							<li key={index}>
								<div className="collapsible-header">
									<i
										className={
											operational
												? 'material-icons icon-green'
												: 'material-icons icon-red'
										}
									>
										desktop_windows
									</i>
									{server}
									{hosts}
									<ServiceBadge
										svcQty={svcQty}
										allRunning={allRunning}
										svcRunning={svcRunning}
									/>
								</div>
								{services}
							</li>
						)
					})}
				</ul>
			</div>
		)
	} else {
		return (
			<div className="progress">
				<div className="indeterminate" />
			</div>
		)
	}
}

export default Servers
