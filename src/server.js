const express = require("express");
const projectRoutes = require("./projects");
const {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  catchAllHandler,
} = require("./errorHandling");

const server = express();
const port = 6969;

server.use(express.json());
server.use("/projects", projectRoutes);

server.use(notFoundHandler);
server.use(unauthorizedHandler);
server.use(forbiddenHandler);
server.use(catchAllHandler);

server.listen(port, () => {
  console.log("PeepoRun at port: ", port);
});
