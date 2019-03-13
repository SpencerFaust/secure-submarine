const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    if (req.user.clearance_level > 10) {
        pool.query('SELECT * FROM "secret";')
            .then(results => {
                res.send(results.rows);
            })
            .catch(error => {
                console.log('Error making SELECT for secrets:', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(400)
    };
});

module.exports = router;