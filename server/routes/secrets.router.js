const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    pool.query('SELECT * FROM "secret";')
        .then(results => {
            if (req.user.clearance_level > 10) {
                res.send(results.rows)
            } else {
                res.sendStatus(404);
            }
        })
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
});

module.exports = router;