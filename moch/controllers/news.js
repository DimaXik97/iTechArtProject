const express = require('express');
const news = require('./../news');

module.exports = () => {
    const router = express.Router();
    router.get('/',(req, res) =>
    {
        res.send(news);
    });
    return router;
}