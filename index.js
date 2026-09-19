const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ success: true, message: 'ok', data: {} });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Sandbox listening on ${PORT}`));
}

module.exports = app;
