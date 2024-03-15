import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  id:0
};

export const EnquirySlice = createSlice({
  name: "Enquiry",
  initialState: initialState,
  reducers: {
    addEnquiredUser: (state, { payload }) => {
        state.id=payload.id
      ;
    }  },
});

export const { addEnquiredUser } = EnquirySlice.actions;

export const EnquiryReducer = EnquirySlice.reducer;
