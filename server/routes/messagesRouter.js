// routes/messagesRouter.js
const express = require('express');
const router = express.Router();
const { getAllMessages, getMessageById, createMessage } = require('../controllers/messagesController');

router.get('/', getAllMessages);        // GET /api/messages
router.get('/:id', getMessageById);     // GET /api/messages/:id
router.post('/', createMessage);        // POST /api/messages

module.exports = router;