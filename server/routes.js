const express = require('express');
const knex = require('knex');
const router = express.Router();
const knexConfig = require('./knexfile');

router.post('/submit', async (req, res) => {

// Database Connection Setup
    const data = {

        name: req.body.personName,
        person_number: req.body.personNumber,
        person_email: req.body.personEmail
    };

    // db('chat_app').insert(data)
    // .then(() => {
    //     res.redirect('/?status=success');
    // }).catch((err) => {
    //     res.redirect('/?status=error');
    // }).finally(() => {
    //     db.destroy();
    // });
});

router.get('/chats', async (req, res) => {
    const db = knex(knexConfig);
    let arrayOfData = "[";
    await db.select('*').from('chat_app')
        .then(rows => {
            for(let i = 0; i < rows.length; i ++) {
                arrayOfData += "{\"id\":"+rows[i].id+", \"personName\":\""+rows[i].personName+"\", \"personNumber\":\""+rows[i].personNumber+"\"}";

                if(i != rows.length - 1) {
                    arrayOfData += ",";
                }
            }
        })
        .catch(err => {
            console.error(err);
        });
    arrayOfData += "]";

    console.log("arrayOfData >>>>>>>> ", arrayOfData);
    
    res.json(arrayOfData);
});

module.exports = router;