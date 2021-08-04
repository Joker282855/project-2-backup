const router = require('express').Router();
const { Calendar } = require('../../models');

// GET /api/calendar
router.get('/', (req, res) => {
    Calendar.findAll()
    .then(dbCalendarData => res.json(dbCalendarData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Calendar.create({
        type: req.body.type,
        book: req.body.book,
        page: req.body.page,
        date: req.body.date
    })
        .then(dbCalendarData => res.json(dbCalendarData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Calendar.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbCalendarData => {
        if(!dbCalendarData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbCalendarData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Calendar.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCalendarData => {
            if (!dbCalendarData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;