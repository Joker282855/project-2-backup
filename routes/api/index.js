const router = require('express').Router();

const calendarRoutes = require('./calendar-routes.js');
const bellRoutes = require('./bell-routes.js');
const contactRoutes = require('./contact-routes.js');
const newsfeedRoutes = require('./newsfeed-routes.js');

router.use('/calendars', calendarRoutes);
router.use('/bells', bellRoutes);
router.use('/contacts', contactRoutes);
router.use('/newsfeeds', newsfeedRoutes);

module.exports = router;