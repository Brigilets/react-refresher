import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk(
  "users/fetch" /*this is the base type, that generates the types in automatic actions  */,
  async () => {
    const response = await axios.get("http://localhost:3005/users");
    // DEV ONLY
    await pause(2500);
    return response.data;
  }
);

// DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { fetchUsers };
