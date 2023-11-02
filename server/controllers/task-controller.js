// Importing necessary modules
const dbConnect = require("../config/dbConfig");

// Defining route handler for POST requests to add tasks
const addTasks = async (req, res) => {
  try {
    const task = req.body.task;

    // SQL query to Insert a record into the 'ToDo' table in the database
    const addTask = `INSERT INTO ToDo (task) VALUES (?)`;

    // Executing the SQL query and handling the result
    dbConnect.query(addTask, [task], (error, result) => {
      if (error) {
        console.log("Task Insertion Failed", error);
        res.status(500).json({ error: "Task Insertion Failed" });
      } else {
        console.log("Task Added Successfully");
        res.status(200).json({ message: "Task Added Successfully" });
      }
    });
  } catch (error) {
    console.error("Error in adding a task:", error);
    res.status(500).json({ error: "An error occurred while adding a task" });
  }
};

// Defining route handler for GET requests to retrieve tasks
const getTasks = (req, res) => {
  // SQL query to select all records from a 'ToDo' table in the database
  const getTask = `SELECT * FROM Todo`;

  // Executing SQL query and handling the result
  dbConnect.query(getTask, (error, result) => {
    if (error) {
      console.log("Task Retrieval Failed");
      res.status(500).json({ error: "Task Retrieval Failed" });
    } else {
      console.log("Task Retrieved Successfully");
      res
        .status(200)
        .json({ message: "Task Retrieved Successfully", data: result });
    }
  });
};

// Defining route handler for DELETE requests to delete tasks
const deleteTasks = async (req, res) => {
  try {
    const taskId = req.params.taskId;

    // Use a SQL query to delete the task with the given ID
    const deleteTask = `DELETE FROM Todo WHERE TaskId = (?)`;

    // Executing SQL query and handling the result
    dbConnect.query(deleteTask, [taskId], (error, result) => {
      if (error) {
        console.log("Task Deletion Failed", error);
        res.status(500).json({ error: "Task Deletion Failed" });
      } else {
        console.log("Task Deleted Successfully");
        res.status(200).json({ message: "Task Deleted Successfully" });
      }
    });
  } catch (error) {
    console.error("Error in deleting a task:", error);
    res.status(500).json({ error: "An error occurred while deleting a task" });
  }
};

// Exporting the route handler functions
module.exports = { getTasks, addTasks, deleteTasks };
