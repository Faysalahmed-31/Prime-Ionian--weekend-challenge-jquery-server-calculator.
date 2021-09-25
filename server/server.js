     //require expressions
	const express = require('express');
	const bodyParser = require('body-parser');
	

	// declare and initialize app
	const app = express();

// app.use expressions
	app.use(express.static('./server/public'));
	//app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));


// listen for requests
	const port = 5000;


	app.listen(port, () => {
	    // kind of like our onReady function
	    console.log('App is up and running!', port) ;
	});