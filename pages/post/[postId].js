import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import Nav from "../../components/Nav";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <Head>
        <title>Metechi - Post</title>
        <meta https-equiv="Content-type" content="text/html; charset=UTF-8" />
      </Head>

      <Nav light />

      <style jsx>{``}</style>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const { postId } = query;
  const res = await fetch(
    `http://18.218.129.154/wp-json/wp/v2/posts/${postId}`
  );
  const post = await res.json();
  return { post };
};

export default Post;
