let express = require('express');
let path = require('path');
let PORT = process.env.PORT || 3000;


express()
	.use(express.static(path.join(__dirname, 'public')))
	.get('/', (req, res) => res.render('pages/index.html'))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));


	