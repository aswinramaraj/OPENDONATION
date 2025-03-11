const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./login_server'); // Ensure this file name is correct
const app = express();
const Signmodel = require('../models/signmodel');
const donate =require('../models/donate')
const claimmodal = require('../models/claim')



const port=7010;

app.use(cors());
app.use(express.json());  // Ensure JSON body is parsed correctly


mongoose.connect("mongodb://localhost:27017/donation", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));


app.post('/login_data', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Debugging: Print received request data
        console.log("Received Data:", req.body);

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if email exists
        const user = await Signmodel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Invalid email" });
        }

        // Check if password matches
        if (user.password === password) {
            return res.status(201).json({ message: "Login successful" });
        } else {
            return res.status(400).json({ error: "Incorrect password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ error: "Server error" });
    }
});


app.post('/sign_data', async (req, res) => {
    try {
      
        const { name, email, password } = req.body;
        console.log(req.body)

        // Validate request data
        if (!name || !email || !password    ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await Signmodel.findOne({ email });
        console.log("Existing user:", existingUser);
if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
}


        const newUser = new Signmodel({ name, email, password });
           
        const savedUser = await newUser.save();

        console.log("User data saved:", savedUser);
        res.status(201).json({ message: "Data saved successfully", data: savedUser });
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(500).json({ message: "Error saving data", error: err.message });
    }
});


app.post('/donate-data', (req, res) => {
   // Check if data is received

    const { item, email, number, img, loc, des } = req.body;

    if (!item || !email || !number || !img || !loc || !des) {
        console.log("filled")
        res.status(400).json({ msg: "Fill all boxes" }); // 400 is better for validation errors
    }
    const user = new donate({item, email, number, img, loc, des})
    const saveuser = user.save()
    console.log("User data saved:", saveuser);
    res.status(201).json({ msg: "Data saved successfully", data: saveuser });


});

app.get('/receve-data', async (req, res) => {
    try {
      const response = await donate.find().limit(10);
      return res.json({ data1: response }); // Wrap the response in an object with the 'data1' key
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  app.post('/claim-data', async (req, res) => {
    const { name, location, email, description } = req.body;
    console.log(req.body);

  
   
  
    try {
      // Create a new claim
      const claim = new claimmodal({ name, location, email, description });
      const saveclaim = await claim.save(); // Await the save operation
  
      console.log("User data saved:", saveclaim);
  
      // Send the success response
      return res.status(201).json({ msg: "Data saved successfully", data: saveclaim });

    } catch (error) {
      console.error("Error saving data:", error);
      return res.status(500).json({ msg: "Internal server error" });
    }
  });

  app.post('/delete-data',async(req,res) => {
    const {name} = req.body
    try {
        // Delete operation, e.g., removing from the database:
        const result = await donate.deleteOne({ item:name });
        if (result.deletedCount > 0) {
            res.status(200).json({ msg: "Item deleted successfully" });
        } else {
            res.status(404).json({ msg: "Item not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error deleting item", error });
    }
    
  })
  

app.listen(port,(req,res)=>{
    console.log("the port is running")
})
