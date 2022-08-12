const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', async (req, res, next) => {
	try {
		const response = await axios.get(process.env.URL);
		res.json(response.data);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
