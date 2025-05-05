  const authuser = require("../../../services/authuserService/authuserservice");  
  const express= require ('express');
  const router = express.Router();

  // Create a new User
  router.post("/register", authuser.create);  

  // Login
  router.post("/login", authuser.loginUser);  

  // Retrieve all Users
  router.get("/", authuser.findAll);  

  // Retrieve a single User with id
  router.get("/:id", authuser.findOne); 

  // Update a User with id
  router.put("/:id", authuser.update); 

  // Delete a User with id
  router.delete("/:id", authuser.delete);    

  module.exports = router;
  