// controllers/messagesController.js
const messages = [
  { id: 1, text: "Hi there!", user: "Amando", added: new Date() },
  { id: 2, text: "Hello World!", user: "Charles", added: new Date() }
];

function getAllMessages(req, res) {
  res.json(messages);
}

function getMessageById(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
 
  const message = messages.find(m => m.id === id);
  if (!message) return res.status(404).json({ error: 'Message not found' });

  res.json(message);
}

function createMessage(req, res) {
  const { user, text } = req.body;
  if (!user || !text) return res.status(400).json({ error: 'user and text required' });

  const id = messages.length ? messages[messages.length-1].id + 1 : 1;
  const newMessage = { id, user, text, added: new Date() };
  messages.push(newMessage);

  res.status(201).json(newMessage);
}

module.exports = { getAllMessages, getMessageById, createMessage };