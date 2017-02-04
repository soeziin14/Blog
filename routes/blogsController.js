var AWS         = require('aws-sdk'),
    aws         = require('../api/aws');

AWS.config.update({
    region: "us-east-1",
    endpoint: "dynamodb.us-east-1.amazonaws.com",
    accessKeyId: aws.ACCESS_KEY,
    secretAccessKey: aws.SECRET_KEY,
})

module.exports.new = function(req, res){
    var form = req.body;
       console.log("form: ", form);

       var table       = "Blog";

    //    var docClient = new AWS.DynamoDB.DocumentClient();
    //    var params = {
    //            TableName:table,
    //            Key:{
    //                "author": author,
    //                "timestamp": timestamp,
    //            },
    //            UpdateExpression:
    //                              "set title = if_not_exists(title, :title),"+
    //                              "descriptions = if_not_exists(descriptions, :descriptions),"+
    //                              "ratings = if_not_exists(ratings, :ratings)"+
    //                              "add #photos :photos",
    //            ExpressionAttributeNames:{
    //                "#photos": "photos",
    //            },
    //            ExpressionAttributeValues: {
    //                ":title": form.title,
    //                ":descriptions": form.descriptions,
    //                ":ratings": form.ratings,
    //                ":photos": docClient.createSet([form.photos]),
    //            }
    //        };
    //        docClient.update(params, function(err, data) {
    //            if (err) {
    //                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    //            } else {
    //                console.log("Added item:", JSON.stringify(data, null, 2));
    //            }
    //        });
       res.status(200).send({success: true});
}
