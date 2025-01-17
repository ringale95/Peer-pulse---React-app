// Import the express module
import express from 'express';
// Import the initialization function from the app.js file in the app directory
import initialize from './app/app.js';

// Create an instance of express
const app = express();

// Call the initialize function to set up middleware and other configurations
initialize(app);

// Set the port number for the server to listen on
const port = process.env.PORT_NUMBER || 9000;

// Start the server and make it listen on the specified port.
// Once the server is running, log a message to the console.
app.listen(port, () => console.log(`Server is listening at port ${port}`));