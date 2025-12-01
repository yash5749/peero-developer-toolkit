import User from "../models/User.js";
import generateToken from "../utils/token.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

// Register
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields required");
  }

  const exists = await User.findOne({ email });
  if (exists) throw new ApiError(400, "Email already exists");

  const user = await User.create({ name, email, password });

  return res
    .status(201)
    .json(new ApiResponse(201, {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    }, "User registered successfully"));
});

// Login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(400, "Invalid credentials");

  const match = await user.matchPassword(password);
  if (!match) throw new ApiError(400, "Invalid credentials");

  return res.json(
    new ApiResponse(200, {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    }, "Login successful")
  );
});

// Get Current User
export const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  return res.json(new ApiResponse(200, user, "User fetched successfully"));
});
