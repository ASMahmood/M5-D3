const express = require("express");
const studRoutes = require("./projects");

const server = express();
const port = 6969;

server.use(express.json());
server.use("/projects", studRoutes);

server.listen(port, () => {
  console.log(`PeepoRun at port: ${port}/`);
});
