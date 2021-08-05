const router = require('express').Router();

const newsfeedRoutes = require('./newsfeed-routes.js');


router.use('/newsfeed', newsfeedRoutes);

module.exports = router;