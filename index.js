// index.js
const express = require('express');
const cors = require('cors');
const messageRouter = require('./routes/messageRouter');

const app = express();
app.use(cors());        // allow frontend requests in dev
app.use(express.json);  // parse JSON body (used by React fetch)
app.use('/api/messages', messageRouter);

// simple centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(error.statusCode || 500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});