const express = require('express') // Import the Express module
const router = express.Router() // Create a new router instance
const getRandomWYRQuestion = require('../model/wyr_questions') // Import the function to get a random "Would You Rather" question

router.get('/',function(req, res, next) { // Define a route for the root path
    res.send('Placeholder for home page!')
})

router.get('/wyr', function(req, res, next) { // Define a route for the "/wyr" path
    const wyr = { 
        // 'question': 'Live in a circle house or a triangle house',
        // 'answer1': 'Circle house',
        // 'answer2': 'Triangle house'
    }
    res.json(wyr) // Send the "Would You Rather" question as a JSON response
})

module.exports = router // Export the router instance for use in other parts of the application
