const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');
const cors=require("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'ABFYgazguagsjhGG';

const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration
//mongoose.connect('mongodb+srv://stu110:p869132-@csci2720.m2qbq.mongodb.net/stu110');
mongoose.connect('mongodb+srv://Hanzalah:Hanzalah@cluster0.yduu7.mongodb.net')
const db = mongoose.connection;
// Upon connection failure
db.on('error', console.error.bind(console,
'Connection error:'));
// Upon opening the database successfully
db.once('open', function () {
console.log("Connection is open...");})

app.get('/', (req,res)=>{
    res.send("server start")
})

/**
 * @route   POST api/auth/register
 * @desc    perform user registration
 */

app.post('/register', (req, res) => {
    var userid = 1;
    var userrole = "user";
    // var user1 =  User.findOne({}).sort({user_id: -1});
    // if (user1) {
    //   userid = user1.user_id + 1;
    // }
    const {name,  password, email, phone_number} = req.body;
  
    // Simple validation to check whether there are missing fields
    if (!name || !password|| !email || !phone_number) {
      return res.status(400).json({ msg: 'some fields are missing' });
    }
  
    if (name.length < 4 || name.length > 40 || password.length < 4 || password.length > 20) {
      return res.status(400).json({ msg: 'username and password should be strings of 4-20 characters' });
    }
  
    try {
    //   const user =  User.findOne({ name });
    //   if (user) throw Error('User already exists');
  
      const salt =  bcrypt.genSalt(10); //add a salt to increase encryption strength 
      if (!salt) throw Error('bcrypt error');
  
      const hash =  bcrypt.hash(password, salt); //encrypt the password
      if (!hash) throw Error('hashing password error');
  
      const newUser = {
        user_id: userid,
        email,
        name,
        phone_number,
        password: hash,
        role: userrole
      };
    //   const savedUser =  newUser.save();
    //   if (!savedUser) throw Error('saving user error');
  
      const token = jwt.sign({ user_id: 1 , name : name }, JWT_SECRET, {expiresIn: 360000});
  
      res.status(200).json({
        token,
        user: {
          user_id: userid,
          name: name,
          role: userrole        }
      });
    } catch (e) {
      res.status(401).json({ error: e.message });
    }
  });
  

  /**
 * @route   POST api/auth/login
 * @desc    perform user login
 */

app.post('/login',  (req, res) => {
    const { name, password, phone_number, email } = req.body;
  
    // Simple validation
    if (!name || !password) {
      return res.status(401).json({ msg: 'Please enter all fields' });
    }
  
    try {
      // Check for existing user
      const user =  User.findOne({ name });
      if (!user) throw Error('user does not exist');


  
      const isMatch =  bcrypt.compare(password, user.password);
      if (!isMatch) throw Error('Invalid credentials');
  
  
      const token = jwt.sign({ user_id: user.user_id , name : user.name, user_object_id: user._id}, JWT_SECRET, { expiresIn: 360000 });
      if (!token) throw Error('cannot sign token');
  
      res.status(200).json({
        token,
        user: {
          Objectid: user._id,
          user_id: user.user_id,
          name: user.name,
          role: user.role
        }
      });
    } catch (e) {
      res.status(401).json({ msg: e.message });
    }
  });
const server = app.listen(5000);
