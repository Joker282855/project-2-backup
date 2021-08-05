const router = require('express').Router();
const { Contact } = require('../../models');

// GET /api/calendar
router.get('/', (req, res) => {
    Contact.findAll()
    .then(dbContactData => res.json(dbContactData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Contact.create({
        name: req.body.name,
        email: req.body.email
    })
        .then(dbContactData => res.json(dbContactData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Contact.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbContactData => {
        if(!dbContactData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbContactData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;