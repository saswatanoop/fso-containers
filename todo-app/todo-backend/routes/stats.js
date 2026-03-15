const express = require('express');
const redis = require('../redis')
const router = express.Router();



/* GET index data. */
router.get('/', async (req, res) => {
    const count = await redis.get('todo_count', 0)
    console.log('Count from redis', count)
    const data = {
        "added_todos": count
    }
    res.send(data);
});

module.exports = router;
