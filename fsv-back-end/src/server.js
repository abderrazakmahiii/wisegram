import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; 
import middleware from './middleware';

const app = express();
app.use(bodyParser.json());

// Serve static images
app.use('/images', express.static(path.join(__dirname, '../assets')));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  birthdate: { type: Date },
  phone: { type: String },
  // ... other user fields
});

const User = mongoose.model("User", userSchema);

// User login route (replace with your actual logic)
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      return res.json({ success: true, user }); // Return user object for authorization
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.error("Error:", err);
    return res.status(404).json({ error: "Internal server error" });
  }
});

// Signup route (replace with your actual logic)
app.post('/api/signup', async (req, res) => {
  try {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      ...req.body, // Other user fields
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    res.status(404).json({ error: "Internal server error" });
  }
});

// Protected user update route
app.post('/api/update-user', middleware.isAuthenticated, async (req, res) => {
  const { name, birthdate, phone, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, {
      name,
      birthdate,
      phone,
      email,
      password: password ? await bcrypt.hash(password, 10) : user.password,
    }, { new: true });
    res.json({ success: true, user });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all users for admin
app.get('/api/users', middleware.isAuthenticated, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Unauthorized access' });
  }
  const users = await User.find();
  res.json(users);
});

// Create a new user (for admin)
app.post('/api/users', middleware.isAuthenticated, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Unauthorized access' });
  }
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.json({ success: true, user: newUser });
  }   catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/users/:userId', middleware.isAuthenticated, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Unauthorized access' });
  }
  const { userId } = req.params;
  const { name, birthdate, phone, email, password } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      name,
      birthdate,
      phone,
      email,
      password: password ? await bcrypt.hash(password, 10) : undefined, 
    }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ success: true, user: updatedUser });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/users/:userId', middleware.isAuthenticated, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Unauthorized access' });
  }
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function insertProducts(products) {
  try {
    const vueDb = await connectToVueDb();
    const collection = vueDb.collection('products');

    await collection.insertMany(products, { ordered: false }); // Insert with error handling
    console.log('Products inserted successfully!');
  } catch (err) {
    console.error('Error inserting products:', err);
  }
}

async function insertUsers(users) {
  try {
    const usersDb = await connectToUsersDb();
    const collection = usersDb.collection('users');

    await collection.insertMany(users, { ordered: false });
    console.log('Users inserted successfully!');
  } catch (err) {
    console.error('Error inserting users:', err);
  }
}

fetchProductsData()
  .then(products => insertProducts(products))
  .catch(err => console.error('Error fetching products:', err));

fetchUserData()
  .then(users => insertUsers(users))
  .catch(err => console.error('Error fetching users:', err));
  
app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});

