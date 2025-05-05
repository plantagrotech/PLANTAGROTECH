const { DATE } = require("sequelize");
const authuserdb = require("../../dataLayer/authuserDL/authuserdl");
const Authuser = authuserdb.authusers;
const Op = authuserdb.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a new User
exports.create = async (req, res) => {
  const {email,firstname,password}= req?.body;
  // Validate request
  if (!email || email.length == 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).send({
      message: "Email is invalid"
    });
    return;
  } 

  if (!firstname || firstname.length == 0) {
    res.status(400).send({
      message: "First name is invalid"
    });
  }

  if (!password || password.length == 0) {
    res.status(400).send({
      message: "Password is invalid"
    });   
  }
  
  // Create a User
  const authuser = {
    email: email,
    firstname: firstname,
    passwordhash: await bcrypt.hash(password, 10)
  };

  // Save User in the database
  Authuser.create(authuser)
    .then(data => {
      const response = {
        useEmail: data?.email,
        userFirstName: data?.firstname
      }
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.loginUser= async(req,res)=>{
  const { email, password } = req.body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password || password.length == 0) {
    return res.status(401).json({
        "status": "Bad request",
        "message": "Authentication failed",
        "statusCode": 401
    })
  }
  const response= await Authuser.findOne(({ where: { email: email } }))
    .then(data => {
      return data;
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with id=" + email
      });
    }); 
    if (response && bcrypt.compare(password, response.passwordhash)) {
      const token = jwt.sign({ userId: response.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Logged in successfully', token: token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    } 
}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const title = req?.query?.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Authuser?.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Authuser.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Authuser.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Authuser.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};



