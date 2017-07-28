const express = require('express');
const vacancies = require('./../vacancies');
module.exports = () => {
    const router = express.Router();
    router.get('/',(req, res) =>
    {
        res.send(vacancies);
    });
    return router;
}