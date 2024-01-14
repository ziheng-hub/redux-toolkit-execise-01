import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Redux Toolkit",
    content: "Redux Toolkit is same as UseReducer of React",
    date: new Date().toISOString(),
    reactions: {
      heart: 0,
      bad: 0,
    },
  },
  {
    id: "2",
    title: "UseReducer",
    content: "UseReducer of React is same as Redux Toolkit",
    date: new Date().toISOString(),
    reactions: {
      heart: 0,
      bad: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            userId: userId,
            date: new Date().toISOString(),
            reactions: {
              heart: 0,
              bad: 0,
            },
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
export const { postAdded,reactionAdded} = postSlice.actions;
