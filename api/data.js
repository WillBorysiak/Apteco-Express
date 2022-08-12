const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		res.json(response.data);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
