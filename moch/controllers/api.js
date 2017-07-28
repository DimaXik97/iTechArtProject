const express = require('express');

module.exports = () => {
    const router = express.Router();
    const userController = require('./user')();
    const testController = require('./test')();
    const newsController= require('./news')();
    const resultController = require('./result')();
    const vacanciesController= require('./vacancies')();
   

    router.use('/user', userController);
    router.use('/test', testController);
    router.use("/news", newsController);
    router.use("/result", resultController);
    router.use('/vacancies', vacanciesController);

    return router;
};