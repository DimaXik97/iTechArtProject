const express = require('express');
const test = require('./../test');
module.exports = () => {
    const router = express.Router();
    router.get('/:id/:test',(req, res) =>
    {
        questions=[];
        test.forEach(function(element) {
           if(element.id==req.params.id){
                element.tests.forEach(tElement=>{
                    if(tElement.id==req.params.test)
                        questions=tElement.questions;
                })
            }
        });
        res.send(questions);
    });
    router.get('/:id',(req, res) =>
    {
        tests=[];
        test.forEach(function(element) {
            if(element.id==req.params.id){
                element.tests.forEach(tElement=>{
                    tests.push({id: tElement.id, name: tElement.name});
                })
            }
        });
        res.send(tests);
    });
    router.get('/',(req, res) =>
    {
        categories=[];
        test.forEach(function(element) {
            categories.push({id: element.id, name: element.name});
        });
        res.send(categories);
    });
    return router;
}