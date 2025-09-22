const express = require('express');
const app = express();
const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`cart service is running on port ${PORT}`);
});