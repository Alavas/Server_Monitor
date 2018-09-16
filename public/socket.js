var connection = new WebSocket('ws://192.168.1.70:8888')

connection.onopen = function () {
    console.log("Socket Opened")
}

connection.onmessage = function (message) {
    console.log(JSON.parse(message.data))
}