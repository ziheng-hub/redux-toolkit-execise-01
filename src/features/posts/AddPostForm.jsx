import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      //dispatchにactionを与えるとき、内部で引数の値を抽象化させることで、他のコンポーネントで重複した記述を防ぐ。
      // postAdded({
      //   id: nanoid(),
      //   title: title,
      //   content: content,
      // })
      dispatch(postAdded(title,content));
    }
    setTitle("");
    setContent("");
  };

  return (
    <section
      style={{
        border: "solid 1px black",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <h2>掲示板入力</h2>
      <form
        style={{
          marginBottom: "10px",
        }}
      >
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={onTitleChange}
        />
      </form>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
      </div>

      <button type="button" onClick={onSavePostClicked}>
        送信
      </button>
    </section>
  );
};

export default AddPostForm;
