// Importing necessary libraries and modules
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors"); // Cross-Origin Resource Sharing for triggering the backend from frontend

// Creating an Express application
const app = express();

// Setting up the server port, default to 4000
const PORT = process.env.PORT || 5000;

// Body parsing middleware for incoming JSON requests
app.use(express.json());

// Setting up CORS middleware to handle cross-origin requests
app.use(cors());

// Including the routes 
const routes = require("./routes/routes");
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello Ajeet");
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
