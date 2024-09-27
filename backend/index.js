const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { error } = require('console');
const jwt = require('jsonwebtoken');


// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://MuhmmadIftikhar:booktreasuremongodb@cluster0.fzanulk.mongodb.net/garments-ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'upload/images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Image storage engine
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Static folder for images
app.use('/images', express.static(uploadDir));

// Routes
app.get('/', (req, res) => {
    res.send("Hello Garments");
});

app.post('/upload', upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    res.json({
        success: true,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
    }
});

const Product = mongoose.model('Product', productSchema);

app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });

        await product.save();
        res.json({ success: true, name: req.body.name });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, message: "Error adding product" });
    }
});

app.post('/deleteproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        res.json({ success: true, name: req.body.name });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Error deleting product" });
    }
});

app.get('/allproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Error fetching products" });
    }
});
// schema for user model
const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})
// craeting endpoint apis for users 
app.post('/signup', async (req, res) => {
    try {
      let check = await Users.findOne({ email: req.body.email });
      if (check) {
        return res.status(400).json({ success: false, error: "Email already exists" });
      }
  
      let cart = {};
      for (let i = 0; i < 300; i++) {
        cart[i] = 0;
      }
  
      const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart, // Ensure the schema allows this structure
      });
  
      await user.save();
  
      const data = {
        id: user._id // Make sure this matches MongoDB's default ID field
      };
  
      const token = jwt.sign(data, 'secret-garments');
      res.json({ success: true, token });
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).json({ success: false, error: "Server error" });
    }
  });
  
  app.post('/login', async (req, res) => {
    try {
      let user = await Users.findOne({ email: req.body.email });
  
      if (user) {
        // Trim any leading/trailing spaces and compare the passwords
        const passcompare = req.body.password.trim() === user.password.trim();
  
        if (passcompare) {
          const data = {
            user: {
              id: user.id
            }
          };
          const token = jwt.sign(data, 'secret-garments');
          res.json({ success: true, token });
        } else {
          res.json({ success: false, errors: "Wrong password" });
        }
      } else {
        res.json({ success: false, errors: "Wrong email ID" });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  });
  

app.listen(port, (err) => {
    if (!err) {
        console.log(`App is running on port ${port}`);
    } else {
        console.error("Error starting server:", err);
    }
});
