const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

require('./routes/api')(app);

app.listen(PORT, () => `working on port: ${PORT}`);
