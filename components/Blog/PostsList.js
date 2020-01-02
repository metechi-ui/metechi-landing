import React from "react";

import { usePostsList } from "../../context/PostsContext";
import Post from "./Post";

const PostsList = ({ tags }) => {
  const { postList, isSearch } = usePostsList();
  return (
    <>
      {!postList.length && isSearch && <p>No results found</p>}
      {postList.map(post => (
        <Post key={post.id} post={post} tags={tags} />
      ))}
      <style jsx>{`
        p {
          font-size: 20px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default PostsList;
