var express         = require('express'),
    router          = express.Router();
    blogsController = require('./blogsController');


router
    .route('/getSignedAWSUrl')
    .get(blogsController.getSignedAWSUrl);

router
    .route('/new')
    .post(blogsController.new);

module.exports = router;
