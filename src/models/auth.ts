import { Schema, model } from "mongoose";
import type { UserTypes } from "../interfaces/user";

const UserSchema = new Schema<UserTypes>(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    createdAt: { type: Date },
  },
  {
    versionKey: false,
  },
);

const User = model("User", UserSchema, "users");

export default User;
