import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

import crypto from 'crypto';
const otpStore = {}; 
// OTP generation and email sending
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const otp = crypto.randomInt(100000, 999999);

    // Save user with OTP temporarily (before verification)
    const user = new User({ name, email, password, otp });
    await user.save();

    // Send OTP email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    };

    transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'OTP sent to your email' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// Send OTP to user's email
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Generate 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    
    // Store OTP with 5-minute expiration
    otpStore[email] = {
      otp,
      timestamp: Date.now(),
      expiresIn: 5 * 60 * 1000 // 5 minutes in milliseconds
    };

    // Gmail configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Send mail first, then respond
    await transporter.sendMail({
      from: `"Kalakriti" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your OTP for Kalakriti Registration',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Welcome to Kalakriti!</h2>
          <p>Your OTP for registration is:</p>
          <h1 style="color: #EA580C; font-size: 32px;">${otp}</h1>
          <p>This OTP will expire in 5 minutes.</p>
          <p>If you didn't request this OTP, please ignore this email.</p>
        </div>
      `
    });

    // Only send success response after email is sent
    return res.status(200).json({ 
      success: true,
      message: 'OTP sent successfully',
      expiresIn: '5 minutes'
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    
    // Clean up OTP store in case of error
    if (req.body.email && otpStore[req.body.email]) {
      delete otpStore[req.body.email];
    }

    return res.status(500).json({ 
      success: false,
      message: 'Failed to send OTP. Please try again.',
      error: error.message 
    });
  }
};

// Verify OTP before registration
export const verifyOtpAndRegister = async (req, res) => {
  try {
    const { email, otp, name, password } = req.body;

    // Check if OTP exists and hasn't expired
    const storedOTPData = otpStore[email];
    if (!storedOTPData) {
      return res.status(400).json({ 
        success: false,
        message: 'OTP not found or has expired. Please request a new OTP.' 
      });
    }

    // Check OTP expiration
    const now = Date.now();
    if (now - storedOTPData.timestamp > storedOTPData.expiresIn) {
      delete otpStore[email]; // Clean up expired OTP
      return res.status(400).json({ 
        success: false,
        message: 'OTP has expired. Please request a new OTP.' 
      });
    }

    // Verify OTP
    if (storedOTPData.otp !== otp) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid OTP' 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: 'User already exists' 
      });
    }

    // Create new user
    const user = new User({ name, email, password });
    await user.save();

    // Clean up used OTP
    delete otpStore[email];

    // Generate token
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '7d' }
    );

    res.status(201).json({ 
      success: true,
      message: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error registering user',
      error: error.message 
    });
  }
};
// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    user.tokens = user.tokens.concat({ token });
    await user.save();
    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: process.env.NODE_ENV === 'production'
    });

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Logout user
export const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  
  res.json({ message: 'Logged out successfully' });
};

// Get current user
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};