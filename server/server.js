     //require expressions
	const express = require('express');
	const bodyParser = require('body-parser');
	// an array
    const calculation = [];

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

    // GET endpoint
 //sends back calculations array to client 

   app.get('/calculate', (req,res) => {
    console.log('sending back data'); // test to see if endpoint was hit
    res.send(calculation);
})

// pushes data to doMath function to calculate
app.post('/calculate', (req,res) => {
    console.log('in post /calculate'); // testing to see if endpoint was hit
    let mathCalc = req.body; // request data sent over
    let answer = doMath(mathCalc);
    mathCalc.answer = answer; // adds new key
    console.log('req.body is ', mathCalc); // testing
    calculation.push(mathCalc); // pushes object to array
    res.send(200); // sends OK to client
})
