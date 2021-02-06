const dynamoutils = require('./utils/dynamoutils');

let device = {
    "deviceId": "86543150-c695-4fdb-89cf-749abfb305b7",
    "temperature": 54.98,
    "humidity": 32.43,
    "model": "Series-V",
    "timestamp": "2021-02-01T21:12:09Z",
    "sensors": "THERMAL",
    "position": {
        "latitude": 47.615694,
        "longitude": -122.3359976
    }
}

var params = {
    TableName: 'devicedetails',
    Item: {
        deviceid: device.deviceId,
        model: device.model,
        humidity: device.humidity,
        timestamp: device.timestamp,
        temperature: device.temperature,
        sensors: device.sensors,
        sensors: device.sensors,
        position: {
            latitude: device.position.latitude,
            longitude: device.position.longitude
        }
    }
};

dynamoutils.putData(params);



// documentClient.put(params, function (err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

//for retreiving data
var params2 = {
    TableName: 'devicedetails',
    Key: {
        deviceid: device.deviceId,
        model: device.model
    }
};



