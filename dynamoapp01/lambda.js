let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	console.log(event);
	context.succeed('hello ' + event.name);

	ddb.put({
		TableName: 'usr',
		Item: {
			'usrid': '1'
		}
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	callback(null, 'Successfully executed');
}