const express = require('express');
const results = require('./../results');

module.exports = () => {
    const router = express.Router();
    router.get('/',(req, res) =>
    {
        tests=[];
        results.forEach(function(element) {
            if(req.query.user)
            {
                if(req.query.user!=element.idUser) return;
            }
            if(req.query.test)
            {
                if(req.query.test!=element.idTest) return;
            }
            tests.push({id:element.id, user:element.idUser, test: element.idTest, date: element.date});
        });
        res.send(tests);
    });
    router.get('/:id',(req, res) =>
    {
        results.forEach(function(element) {
            res.send(element);
        });
    });

    return router;
}