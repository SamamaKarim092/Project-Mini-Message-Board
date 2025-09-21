// api/index.js - Vercel serverless function entry point
const express = require('express');
const cors = require('cors');
const messageRouter = require('./routes/messagesRouter');

const app = express();
app.use(cors());        // allow frontend requests
app.use(express.json());  // parse JSON body (used by React fetch)
app.use('/api/messages', messageRouter);

// simple centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({ error: err.message });
});

// Export the app for Vercel serverless functions
// Don't call app.listen() - Vercel handles the server
module.exports = app;
