// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    personalInfo: {
      firstName: '',
      lastName: '',
      dob: '',
      mobile: '',
      email: '',
      address: '',
    },
    isSent: false,
    dataInput: false,
  },
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    setFormSent: (state) => {
      state.isSent = true;
    },
    setDataInput: (state) => {
      state.dataInput = true;
    },
    resetForm: (state) => {
      state.personalInfo = {
        firstName: '',
        lastName: '',
        dob: '',
        mobile: '',
        email: '',
        address: '',
      };
      state.isSent = false;
      state.dataInput = false;
    },
  },
});

export const {
  updatePersonalInfo,
  setFormSent,
  setDataInput,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
