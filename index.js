const express = require('express');
const data = require('./api/data');
const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/data', data);

app.listen(PORT, () => {
	console.log(`Server is running in port ${PORT}`);
});
