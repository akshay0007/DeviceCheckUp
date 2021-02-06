const AWS = require('aws-sdk');
const config = require('../config/config');

AWS.config.update(config.aws_local_config);

var documentClient = new AWS.DynamoDB.DocumentClient();
module.exports = {
    putData: documentClient.put(parm, function (err, data) {
        if (err) console.log(err);
        else console.log(data);
    }),
    getData: documentClient.get(parm, function (err, data) {
        if (err) console.log(err);
        else console.log(data);
    })
}
