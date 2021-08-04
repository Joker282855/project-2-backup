const router = require('express').Router();

const calendarRoutes = require('./calendar-routes.js');

router.use('/calendars', calendarRoutes);

module.exports = router;