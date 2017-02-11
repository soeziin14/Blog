var AWS         = require('aws-sdk'),
    aws         = require('../api/aws');

//give client top n blogs
module.exports.getRecentBlogs = function(req, res){

    AWS.config.update({
        region: "us-east-1",
        endpoint: "dynamodb.us-east-1.amazonaws.com",
        accessKeyId: aws.ACCESS_KEY,
        secretAccessKey: aws.SECRET_KEY,
    });
    var table       = "Blog";
    var author      = "Jin Song",
        timestamp   = Date.now();
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName:table,
        KeyConditionExpression: "#author = :author",
        ExpressionAttributeNames:{
            "#author": "author"
        },
        ExpressionAttributeValues: {
            ":author": author,
        },
        Limit: 10,
    };
   docClient.query(params, function(err, data) {
       if (err) {
           console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
       } else {
           console.log("Query succeeded.", data.Items);
           res.status(200).send({data: data.Items});
       }
   });
}
module.exports.getSignedAWSUrl = function(req, res){
    var {filename, filetype} = req.query;
    AWS.config.update({
        accessKeyId: aws.ACCESS_KEY,
        secretAccessKey: aws.SECRET_KEY,
    });
    var bucket = new AWS.S3();
    var params = {
        Bucket: 'jinblog',
        Key: filename,
        Expires: 60,
        ContentType: filetype,
    };

    bucket.getSignedUrl('putObject', params, function(err, data){
        if(err){
            console.log(err);
            return err;
        }
        else{
            console.log("Aws Signed URL:", data);
            res.send({signedUrl: data});
        }
    });
}
module.exports.new = function(req, res){
    AWS.config.update({
        region: "us-east-1",
        endpoint: "dynamodb.us-east-1.amazonaws.com",
        accessKeyId: aws.ACCESS_KEY,
        secretAccessKey: aws.SECRET_KEY,
    });
    var form = [];
    var mainImage;
    //    console.log("title: ", form.title);
    //    console.log("intro: ", form.intro);
    //    console.log("data: ", req.body.componentData);
    req.body.data.forEach(function(data){
        if(data){
            form.push(data.value);
            if(data.type === "image" && !mainImage){
                mainImage = data.value;
            }
        }
    });
    var table       = "Blog";
    var author      = "Jin Song",
        timestamp   = Date.now();

    var docClient = new AWS.DynamoDB.DocumentClient();
    var params    = {
        TableName:table,
           Key:{
               "author": author,
               "timestamp": timestamp,
           },
           UpdateExpression:
                             "set title = if_not_exists(title, :title),"+
                             "intro = if_not_exists(intro, :intro),"+
                             "mainImage = if_not_exists(mainImage, :mainImage)," +
                             "#componentData = if_not_exists(componentData, :componentData)",
           ExpressionAttributeNames:{
               "#componentData": "componentData",
           },
           ExpressionAttributeValues: {
               ":title": req.body.title,
               ":intro": req.body.intro,
               ":mainImage": mainImage,
               ":componentData": docClient.createSet(form),
           }
       };
       docClient.update(params, function(err, data) {
           if (err) {
               res.status(400).send(JSON.stringify(err, null, 2));
           } else {
               res.status(200).send(JSON.stringify(data, null, 2));
           }
       });
}
