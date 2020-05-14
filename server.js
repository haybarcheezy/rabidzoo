let express = require('express');
const cool = require('cool-ascii-faces');
let bodyParser = require('body-parser');
const path = require('path');
const companion = require('@uppy/companion');
const PORT = process.env.PORT || 3000;

express()
	.use(express.static(path.join(__dirname, 'public')))
	.get('/', (req, res) => res.render('pages/index.html'))
	.use(bodyParser.json())
	.use(session({ secret: 'some secrety secret' }))
	.get('/cool', (req, res) => res.send(cool()))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));
