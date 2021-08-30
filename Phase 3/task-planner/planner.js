let http = require("http");
let url = require("url");
let fs = require("fs");

var tableContent = "";
var startTable =
  "<table border=1><tr><th>Employee ID</th><th>Task ID</th><th>Task</th><th>Deadline</th></tr>";
var endTable = "</table>";

let indexPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h2>Task Planner</h2>
    </div>
    <div>
        <h3>Add Task</h3>
    </div>
    <form action="addTask">
        <label>Emp Id</label>
        <input type="text" name="emp_id" id="emp"><br/>
        <label>Task Id</label>
        <input type="text" name="task_id" id="tid"><br/>
        <label>Task</label>
        <input type="text" name="task" id="ta"><br/>
        <label>Deadline</label>
        <input type="date" name="deadline" id="dl"><br/>
        <input type="submit" value="Add Task"/> 
    </form>
    <div>
        <h3>Delete Task</h3>
    </div>
    <form action="deleteTask">
        <label>Task Id</label>
        <input type="text" name="task_id" id="tid"><br/>
        <input type="submit" value="Delete Task"/>
    </form>
</body>
</html>
`;

let server = http.createServer((req, res) => {
  let urlInfo = url.parse(req.url, true);

  if (urlInfo.path != "/favicon.ico") {
    if (urlInfo.pathname == "/addTask") {
      let taskAddition = urlInfo.query;
      let tasks = JSON.parse(fs.readFileSync("task.json").toString());
      let result = tasks.find((l) => l.taskId == taskAddition.task_id);
      res.writeHead(200, { "content-type": "text/html" });
      if (result == undefined) {
        tasks.push({
          empId: taskAddition.emp_id,
          taskId: taskAddition.task_id,
          task: taskAddition.task,
          deadline: taskAddition.deadline,
        });
        fs.writeFileSync("task.json", JSON.stringify(tasks));
        tableContent = "";
        tasks.forEach((i) => {
          tableContent +=
            "<tr><td>" +
            i.empId +
            "</td><td>" +
            i.taskId +
            "</td><td>" +
            i.task +
            "</td><td>" +
            i.deadline +
            "</td></tr>";
        });
        res.write(indexPage + startTable + tableContent + endTable);
      } else {
        res.write("Task ID must be unique!");
        res.write(indexPage + startTable + tableContent + endTable);
      }
    } else if (urlInfo.pathname == "/deleteTask") {
      let taskDeletion = urlInfo.query;
      let tasks = JSON.parse(fs.readFileSync("task.json").toString());
      let index = tasks.findIndex((l) => l.taskId == taskDeletion.task_id);
      res.writeHead(200, { "content-type": "text/html" });
      if (index == -1) {
        res.write("Task with id you want to delete not found!");
        res.write(indexPage + startTable + tableContent + endTable);
      } else {
        tasks.splice(index, 1);
        fs.writeFileSync("task.json", JSON.stringify(tasks));
        tableContent = "";
        tasks.forEach((i) => {
          tableContent +=
            "<tr><td>" +
            i.empId +
            "</td><td>" +
            i.taskId +
            "</td><td>" +
            i.task +
            "</td><td>" +
            i.deadline +
            "</td></tr>";
        });
        res.write(indexPage + startTable + tableContent + endTable);
      }
    } else {
      res.write(indexPage + startTable + tableContent + endTable);
    }
  }

  res.end();
});

server.listen(9090, () => console.log("Server running on port number 9090"));