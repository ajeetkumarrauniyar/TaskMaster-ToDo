// Importing necessary libraries and modules
const express = require("express");
const routes = express.Router();
const {
  addTasks,
  deleteTasks,
  getTasks,
} = require("../controllers/task-controller");

// Defining a POST route for adding task
routes.post("/add-task", addTasks);
// Defining a GET route for retrieving task
routes.get('/get-task', getTasks);
// Defining a DELETE route for deleting task
routes.delete('/delete_task/:taskId', deleteTasks);

// Export the authentication router as "authRouter"
module.exports = routes;