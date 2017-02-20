var express         = require('express'),
    router          = express.Router();
    blogsController = require('./blogsController');
    var AWS         = require('aws-sdk'),
        aws         = require('../api/aws');

router
    .route('/login')
    .post(blogsController.login);

router
    .route('/getRecentBlogs')
    .get(blogsController.getRecentBlogs);

router
    .route('/aws/getSignedAWSUrl')
    .get(blogsController.getSignedAWSUrl);

router
    .route('/new')
    .post(blogsController.new);

router
    .route('/show/:id')
    .get(blogsController.getBlog);

module.exports = router;
