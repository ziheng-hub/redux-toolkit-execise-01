import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      //dispatchにactionを与えるとき、内部で引数の値を抽象化させることで、他のコンポーネントで重複した記述を防ぐ。
      // postAdded({
      //   id: nanoid(),
      //   title: title,
      //   content: content,
      // })
      dispatch(postAdded(title, content, userId));
    }
    setTitle("");
    setContent("");
  };
  
  //全ての選択肢が入力された場合、送信ボタンを押せる。
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => {
    return (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section>
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

      <label htmlFor="postAuthor">Author:</label>
      <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
        <option value=""></option>
        {usersOptions}
      </select>

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

      <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
        送信
      </button>
    </section>
  );
};

export default AddPostForm;
