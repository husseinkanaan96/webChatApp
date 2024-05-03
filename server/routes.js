const express = require('express');
const knex = require('knex');
const router = express.Router();
const knexConfig = require('./knexfile');
const db = knex(knexConfig);

router.post('/submit', async (req, res) => {

  // Database Connection Setup
  // const data = {

  //   name: req.body.personName,
  //   person_number: req.body.personNumber,
  //   person_email: req.body.personEmail
  // };

  // db('chat_app').insert(data)
  // .then(() => {
  //     res.redirect('/?status=success');
  // }).catch((err) => {
  //     res.redirect('/?status=error');
  // }).finally(() => {
  //     db.destroy();
  // });
});

// API to get all users
router.get('/users', async (req, res) => {
  const db = knex(knexConfig);
  let arrayOfUsers = "[";
  await db.select('*').from('users')
    .then(rows => {
      for (let i = 0; i < rows.length; i++) {
        arrayOfUsers += "{\"id\":" + rows[i].id + ", \"username\":\"" + rows[i].username + "\", \"user_number\":\"" + rows[i].user_number + "\"}";
        if (i != rows.length - 1) {
          arrayOfUsers += ",";
        }
      }

    })

    .catch(err => {
      console.error(err);
    });
  arrayOfUsers += "]";

  res.json(arrayOfUsers);
});

//API to get user by ID

// router.get('/users/:id', async (req, res) => {

//   try {

//     const {
//       id
//     } = req.params;
//     const db = knex(knexConfig);
//     const data = await db.select('*').from('users').where({
//       id
//     }).first();

//     if (!data) {
//       return res.status(404).json({
//         error: 'Data not found'
//       });
//     }

//     res.json(data);

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({
//       error: 'Internal Server Error'
//     });
//   }
// });


// // API to get all conversations' participants
// router.get('/convoPar', async (req, res) => {
//   const db = knex(knexConfig);
//   let convoParticipants = "[";
//   await db.select('*').from('convo_participants')
//     .then(rows => {
//       for (let i = 0; i < rows.length; i++) {
//         convoParticipants += "{\"id\":" + rows[i].id + ", \"convo_code\":\"" + rows[i].convo_code + "\", \"message_sender\":\"" + rows[i].message_sender + "\" , \"message_recipient\":\"" + rows[i].message_recipient + "\"}";

//         if (i != rows.length - 1) {
//           convoParticipants += ",";
//         }
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
//   convoParticipants += "]";


//   res.json(convoParticipants);
// });

// // API to get conversation participant by ID
// router.get('/convoPar/:id', async (req, res) => {

//   try {

//     const {
//       id
//     } = req.params;
//     const db = knex(knexConfig);
//     const data = await db.select('*').from('convo_participants').where({
//       id
//     }).first();

//     if (!data) {
//       return res.status(404).json({
//         error: 'Data not found'
//       });
//     }

//     res.json(data);

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({
//       error: 'Internal Server Error'
//     });
//   }
// });

// //API to get conversation box 
// router.get('/convoBox', async (req, res) => {
//   const db = knex(knexConfig);
//   let convoBox = "[";
//   await db.select('*').from('convo_box')
//     .then(rows => {
//       for (let i = 0; i < rows.length; i++) {
//         convoBox += "{\"id\":" + rows[i].id + ", \"convo_code\":\"" + rows[i].convo_code + "\"}";

//         if (i != rows.length - 1) {
//           convoBox += ",";
//         }
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
//   convoBox += "]";


//   res.json(convoBox);
// });

// //API to get convo box by convo code
// router.get('/convoBox/:id', async (req, res) => {

//   try {

//     const {
//       id
//     } = req.params;
//     const db = knex(knexConfig);
//     const data = await db.select('*').from('convo_box').where({
//       id
//     }).first();

//     if (!data) {
//       return res.status(404).json({
//         error: 'Data not found'
//       });
//     }

//     res.json(data);

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({
//       error: 'Internal Server Error'
//     });
//   }
// });

// router.get('/convoMsgs', async (req, res) => {
//   const db = knex(knexConfig);
//   let convoMsgs = "[";
//   await db.select('*').from('convo_messages')
//     .then(rows => {
//       for (let i = 0; i < rows.length; i++) {
//         convoMsgs += "{\"id\":" + rows[i].id + ", \"convo_code\":\"" + rows[i].convo_code + "\", \"user_id\":\"" + rows[i].user_id + "\" , \"message\":\"" + rows[i].message + "\" , \"time\":\"" + rows[i].time + "\" }";

//         if (i != rows.length - 1) {
//           convoMsgs += ",";
//         }
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
//   convoMsgs += "]";


//   res.json(convoMsgs);
// });

// router.get('/convoMsgs/:id', async (req, res) => {

//   try {

//     const {
//       id
//     } = req.params;
//     const db = knex(knexConfig);
//     const data = await db.select('*').from('convo_messages').where({
//       id
//     }).first();

//     if (!data) {
//       return res.status(404).json({
//         error: 'Data not found'
//       });
//     }

//     res.json(data);

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({
//       error: 'Internal Server Error'
//     });
//   }
// });

module.exports = router;
