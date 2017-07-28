const express = require('express');
const test = require('./../test');
module.exports = () => {
    const router = express.Router();
    router.get('/',(req, res) =>
    {
        tests=[];
        test.forEach(function(element) {
            tests.push({id: element.id, name: element.name});
        });
        res.send(tests);
    });
    return router;
}