# Personal-Task-Manager

# Prerequisites 
Make sure you have installed Node.js and MongoDB

Step 1: Clone the repository and install dependencies ( npm install )
Step 2 : Start the server ( node app.js )

# Following are the endpoints

- /tasks for retrieving all the task ( GET )
- /tasks for adding a new task ( POST )
- /tasks/:id for deletion of an existing task by ID ( DELETE )

# Database Connection

mongoose.connect("mongodb://127.0.0.1:27017/task-manager")

Here, the database is connected locally. Update the connection string accordingly .


