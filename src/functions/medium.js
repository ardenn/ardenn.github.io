var request = require("request");
exports.handler = function (event, context, callback) {
    var url = "https://medium.com/@mc_alila/latest?format=json";

    // Make the request to Medium and return the Obj
    request(url, function (error, response, body) {
        if (response.statusCode === 200) {
            // We need to pull out the text that comes thru from Medium for JSON hacking
            var jsonBody = JSON.parse(response.body.replace('])}while(1);</x>', ''));
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(jsonBody["payload"]["references"]["Post"])
            }); // Return the JSON object back to our API call
        }
    })
};