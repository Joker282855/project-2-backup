const router = require('express').Router();

const calendarRoutes = require('./calendar-routes.js');
const bellRoutes = require('./bell-routes.js');
const contactRoutes = require('./contact-routes.js');
const newsfeedRoutes = require('./newsfeed-routes.js');

router.use('/calendar', calendarRoutes);
router.use('/bell', bellRoutes);
router.use('/contact', contactRoutes);
router.use('/newsfeed', newsfeedRoutes);

module.exports = router;