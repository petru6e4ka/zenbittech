import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IFeedback = {
  name: string;
  email: string;
  message: string;
};

export const initialState: IFeedback = {
  name: "",
  email: "",
  message: "",
};

const feedback = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<IFeedback["name"]>) {
      return { ...state, name: action.payload };
    },
    setEmail(state, action: PayloadAction<IFeedback["email"]>) {
      return { ...state, email: action.payload };
    },
    setMessage(state, action: PayloadAction<IFeedback["message"]>) {
      return { ...state, message: action.payload };
    },
  },
});

export default feedback;
