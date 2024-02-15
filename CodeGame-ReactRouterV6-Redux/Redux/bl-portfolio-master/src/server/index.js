const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: "Biagio" }));
app.get('/api/getUserData', (req, res) => res.send({ 
	username: "Biagio",
	title: "Software development engineer",
	subtitle: "A really passionate developer"
}));
app.listen(8080, () => console.log('Listening on port 8080!'));
