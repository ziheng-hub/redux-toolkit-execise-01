import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButton } from "./ReactionButton";

const PostsList = () => {
  // 将来的にstate.postsの内部構造が変わった場合、このように外部のComponentで直接useSelectorを呼ぶのではなく、内部でuseSelectorをExportして、外部で使う。
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id} style={{border:"solid 1px black",padding:"50px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"20px"}}>
        <h3>{post.title}</h3>
       
        <p>{post.content.substring(0, 100)}</p>
        <p>
          <PostAuthor userId={post.userId} />
        </p>
        <TimeAgo timeStamp={post.date}/>
        <ReactionButton post={post}/>
      </article>
    );
  });

  return (
    <section>
      <h2>投稿結果</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
