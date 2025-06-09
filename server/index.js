const express = require('express');
const app = express();
const weatherRoute = require('./routes/weather');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/weather', weatherRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
