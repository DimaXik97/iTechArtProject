const express = require('express');
const statistics = require('./../statistics');

module.exports = () => {
    const router = express.Router();
    router.get('/:id',(req, res) =>
    {
        res.send(statistics);
    });
    return router;
}