import express from "express";
import { TasksRouter } from "./routes/tasks";
import bodyParser from "body-parser";

const app = express();
const port = 8080; // default port to listen

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// define a route handler for the default home page
const tasksRouter = new TasksRouter(app);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
