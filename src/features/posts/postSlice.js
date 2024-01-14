import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "Redux Toolkit",
    content: "Redux Toolkit is same as UseReducer of React",
  },
  {
    id: nanoid(),
    title: "UseReducer",
    content: "UseReducer of React is same as Redux Toolkit",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded:{
        reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content){
            return {
                payload:{
                    id:nanoid(),
                    title:title,
                    content:content
                }
            }
        }
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
export const {postAdded} = postSlice.actions;
