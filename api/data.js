const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();
router.get('/', async (req, res) => {
	var data = JSON.stringify({
		baseQuery: {
			selection: {
				tableName: 'People',
			},
		},
		resolveTableName: 'People',
		storage: 'Full',
		leftJoin: false,
		dimensions: [
			{
				id: 'dimension-1',
				type: 'Selector',
				variableName: 'boDest',
			},
			{
				id: 'dimension-2',
				type: 'DateBand',
				variableName: 'boDate',
				banding: {
					type: 'Years',
				},
			},
		],
		measures: [
			{
				id: 'measure-1',
				displayName: 'Count',
				resolveTableName: 'People',
				function: 'Count',
			},
		],
		subTotals: 'All',
	});

	var config = {
		method: 'post',
		url: 'https://www.tealgreenholidays.co.uk/OrbitAPI/CloudDemo/Cubes/CloudDemo/CalculateSync',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
			'Content-Type': 'application/json',
		},
		data: data,
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			res.json(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
});

module.exports = router;
