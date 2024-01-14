import React from 'react'
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
    heart:"❤️",
    bad:"😡"
}

export const ReactionButton = ({post}) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji]) => {
    return (
        <button type='button' onClick={() => {dispatch(reactionAdded({postId:post.id,reaction:name}))}}>
          {emoji} {post.reactions[name]}
        </button>
    )
  })
  return (
    <div>{reactionButtons}</div>
  )
}
