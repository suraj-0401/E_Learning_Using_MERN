import bcrypt from 'bcryptjs';
import User from '../models/models.user.js';
import jwt from 'jsonwebtoken';
export const signup = async (req, res) => {
  try {
    const { name,email, password,role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser  = await User.findOne({ email });
    if (existingUser ) {
      return res.status(400).json({ message: 'Email is already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        role,
    });

    await user.save();

    return res.status(201).json({

      message: 'Signup successful!',
      data: {
        email,
        role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const login = async (req, res) => {
  const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';
  try {
      const { role, email, password } = req.body;

      if (!role || !email || !password) {
          return res.status(400).json({ message: 'All fields are required' });
      }

      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Token
      const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

      return res.status(200).json({
          message: 'Login successful!',
          data: {
              email: user.email,
              role: user.role,
              token: token,
              userId: user._id,
              name: user.name,
          },
      });

  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
}


export const editProfile = async (req, res) => {
  try {
    const userId = req.params.id; 
    const { name, email } = req.body;
    console.log(userId);
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    else {
      res.redirect('/');
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({
      message: 'User profile updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
export default { signup,login,editProfile };