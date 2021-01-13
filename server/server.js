//Require express
const express = require('express');

//Create an express app instance
const app = express();
const PORT = 5000; // we'll tell express to listen on this port

//Set up a static srver using express middleware
//If the incoming request matches a filename in the
// server/public folder, serve that out to the client!
app.use(express.static('server/public'));

//Start up a server on a specified port
app.listen(PORT, function() {
    console.log(`Listening at http://localhost:${PORT}`);
});