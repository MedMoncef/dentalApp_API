import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
  try {
    const { username, email, password, cin, phone, address, role } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password: encryptedPassword, cin, phone, address, role });

    // Create JWT token
    const auth_token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);

    // Send response
    res.status(201).json({ user, auth_token });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Failed to create user' });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    return res.status(500).json({ error: 'Failed to get users' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Error getting user:', error);
    return res.status(500).json({ error: 'Failed to get user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;

    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Failed to update user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Failed to delete user' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).send({ error: 'The user does not exist' });
    }


    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if (!isPasswordValid) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    // Create JWT token
    const auth_token = jwt.sign({ user_id: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    res.cookie('auth_token', auth_token, {
      httpOnly: true
    });

    // Send response
    res.send({
      email: userExists.email,
      username: userExists.username,
      auth_token
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

export { createUser, getAllUser, getUserById, updateUser, deleteUser, loginUser };