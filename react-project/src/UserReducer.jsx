import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data.jsx";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, age } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.age = age;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter(f => f.id != id);
      }
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
export const { updateUser } = userSlice.actions;
export const { deleteUser } = userSlice.actions;
