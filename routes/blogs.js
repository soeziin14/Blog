var express         = require('express'),
    router          = express.Router();
    blogsController = require('./blogsController');
    var AWS         = require('aws-sdk'),
        aws         = require('../api/aws');
router
    .route('/getRecentBlogs')
    .get(blogsController.getRecentBlogs);
router
    .route('/aws/getSignedAWSUrl')
    .get(blogsController.getSignedAWSUrl);

router
    .route('/new')
    .post(blogsController.new);

module.exports = router;
