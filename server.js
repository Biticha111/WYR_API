const express = require('express') // Import the Express module

const indexRouter = require('./routes/index') // Import the index router

const app = express() // Create an instance of the Express application

app.use('/', indexRouter) // Use the index router for the root path

const server =app.listen(process.env.PORT || 3000, function(){ // Start the server and listen on the specified port
    console.log('Server running on port', server.address().port)
})