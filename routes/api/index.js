const router = require('express').Router();

const calendarRoutes = require('./calendar-routes.js');

rourter.use('/calendars', calendarRoutes);

module.exports = router;