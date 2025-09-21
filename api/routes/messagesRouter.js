// routes/messagesRouter.js
const express = require("express");
const router = express.Router();
const {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
} = require("../controllers/messageController");

router.get("/", getAllMessages); // GET /api/messages
router.get("/:id", getMessageById); // GET /api/messages/:id
router.post("/", createMessage); // POST /api/messages
router.delete("/:id", deleteMessage); // DELETE /api/messages/:id

module.exports = router;
