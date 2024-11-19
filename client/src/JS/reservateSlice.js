import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getreservate = createAsyncThunk("reservate/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/reservate/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addreservate = createAsyncThunk("reservate/add", async (newreservate) => {
  try {
    let result = await axios.post("http://localhost:5000/reservate/add", newreservate);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletereservate = createAsyncThunk("reservate/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/reservate/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editreservate = createAsyncThunk(
  "reservate/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/reservate/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
    reservatelist: null,
  status: null,
};

export const reservateSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getreservate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getreservate.fulfilled, (state, action) => {
        state.status = "success";
        state.reservatelist = action.payload.data.reservates;
      })
      .addCase(getreservate.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addreservate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addreservate.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addreservate.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deletereservate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletereservate.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletereservate.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editreservate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editreservate.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editreservate.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default reservateSlice.reducer;