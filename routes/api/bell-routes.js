const router = require('express').Router();
const { Bell } = require('../../models');

router.get('/', (req, res) => {
    Bell.findAll()
        .then(dbBellData => res.json(dbBellData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Bell.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbBellData => {
            if (!dbBellData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbBellData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Bell.create({
        name: req.body.name,
        fact: req.body.fact
    })
        .then(dbBellData => res.json(dbBellData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Bell.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbBellData => {
            if(!dbBellData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbBellData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;