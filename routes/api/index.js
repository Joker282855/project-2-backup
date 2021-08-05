const router = require('express').Router();

const calendarRoutes = require('./calendar-routes.js');
const bellRoutes = require('./bell-routes.js');

router.use('/calendars', calendarRoutes);
router.use('/bells', bellRoutes);

module.exports = router;