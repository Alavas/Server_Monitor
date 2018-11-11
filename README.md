Monitor for server and running services on demo machines. Upon initial connection to the API a JSON is retrieved. After this a WebSocket connection is established and all further changes are receive through this. Please see the associated server side API -> https://github.com/Alavas/Server_Monitor_API.

> Todo - Apply endpoint to WebSocket connection.

Expects to be fed an initial JSON file in the following format:

```json
{
	"ServerName": {
		"Operational": false,
		"HostName": "SERVERNAME.YOURDOMAIN.COM",
		"Purpose": "Example Machine",
		"Hosts": [
			{
				"Name": "Server",
				"IP": "192.168.1.21",
				"Online": true
			},
			{
				"Name": "Another Host",
				"IP": "192.168.1.31",
				"Online": false
			},
			{
				"Name": "More Hosts",
				"IP": "192.168.1.41",
				"Online": false
			}
		],
		"Services": [
			{
				"Name": "MSSQL$SQLEXPRESS",
				"Description": "SQL Server",
				"Running": false,
				"State": "Stopped"
			},
			{
				"Name": "W32Time",
				"Description": "Windows Time",
				"Running": true,
				"State": "Running"
			}
		]
	}
}
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
