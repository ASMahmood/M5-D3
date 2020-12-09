const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const router = express.Router();

const projectFilePath = path.join(__dirname, "projects.json"); //GETTING FILEPATH TO JSON

const getFile = () => {
  //WE'RE MAKING THIS FUNCTION FOR FUTURE REFACTORING
  const machineBuffer = fs.readFileSync(projectFilePath); // TAKES THE FILE AND TURNS IT TO MACHINE CODE
  const fileString = machineBuffer.toString(); //TAKES MACHINE CODE AND TURNS IT TO A JSON STRING
  return JSON.parse(fileString); //TURNS JSON STRING INTO JSON ARRAY WE CAN CODE WITH, AND RETURNS IT FROM THE FUNCTION
};

router.post("/", (req, res) => {
  const projectDataBase = getFile(); //RUNS FUNCTION TO GET DATABASE
  const newProject = req.body; //GETS THE REQUEST BODY
  newProject.ID = uniqid(); //GIVES BODY NEW ID
  newProject.StudentID = uniqid(); //GIVES BODY NEW STUDENT ID
  newProject.CreationDate = new Date(); //GIVES BODY CREATION DATE
  projectDataBase.push(newProject); //ADDS BODY TO DATABSE
  fs.writeFileSync(projectFilePath, JSON.stringify(projectDataBase)); //OVERWRITES OLD DATABASE WITH NEW DATABASE
  res.status(201).send(projectDataBase); //SENDS RESPONSE WITH GOOD CODE AND WHOLE DATABSE
});

module.exports = router;
