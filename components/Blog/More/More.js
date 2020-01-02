import React from "react";

import PostPreview from "./Preview";

const More = ({ posts, tags }) => {
  return (
    <>
      <section className="max-container wide">
        <h1>More From Metechi</h1>
        <div className="flex">
          {posts.map(post => (
            <PostPreview key={post.id} post={post} tags={tags} />
          ))}
        </div>
      </section>
      <style jsx>{`
        section {
          margin-bottom: 150px;
        }

        h1 {
          font-size: 52px;
          text-align: center;
          margin-bottom: 50px;
        }
      `}</style>
    </>
  );
};

export default More;
