const express = require('express');
const user = require('./../user');
module.exports = () => {
    const router = express.Router();
    router.get('/',(req, res) =>
    {
        resUser=[];
        user.forEach(function(element) {
            resUser.push({id: element.id, name: element.name+" "+element.surName});
        });
        res.send(resUser);
    });
     router.get('/:id',(req, res) =>
    {
        thisUser={};
        user.forEach(function(element) {
            if(element.id==req.params.id)
                thisUser={name:element.name+" "+element.surName, photo: element.photo, isBan: element.isBan}
        });
        res.send(thisUser);
    });
    return router;
}