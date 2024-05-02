// const express = require('express');
// const app = express();
// const port = 3000;
// const chatAppRoutes = require('./routes');
// const path = require('path');
// const bodyParser = require('body-parser');

// app.use('/api', chatAppRoutes);
//app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, '../dist/chat_app')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/chat_app/index.html'));
// });

// let chats = [];

// app.use(bodyParser.json());
// app.use(express.json());

// app.get('/chats', (req, res) => {
//   res.json(chats);
// });

// app.post('/chats', (req, res) => {
//   const newChat = req.body;
//   chats.push(newChat);
//   res.sendStatus(204);
// });

// app.delete('/chats/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   chats = chats.filter(item => chats.id !== id);
//   res.sendStatus(204);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const chatAppRoutes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use('/api', chatAppRoutes);
app.use(express.static(path.join(__dirname, '../dist/chat_app')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/chat_app/index.html'));
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
