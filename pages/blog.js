import React, { useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import { colors } from "../styles/theme";
import Nav from "../components/Nav";
import Header from "../components/Header";
import AccessForm from "../components/AccessForm";
import FormBackground from "../components/AccessForm/Background";
import FollowUs from "../components/FollowUs";
import Pagination from "../components/Pagination";
import Post from "../components/Blog/Post";
import Sidebar from "../components/Blog/Sidebar";
import { scrollTo } from "../utils/scrollTo";

const Blog = ({ posts, tags, totalPages }) => {
  const [state, setState] = useState(posts);
  const ref = useRef();
  const router = useRouter();
  const { p } = router.query;

  const fetchPosts = async page => {
    const res = await fetch(
      `http://18.218.129.154/wp-json/wp/v2/posts?per_page=5&page=${page}`
    );
    const posts = await res.json();
    setState(posts);
    scrollTo(ref.current);
    router.push("/blog", `/blog?p=${page}`);
  };

  return (
    <div>
      <Head>
        <title>Metechi - Blog</title>
        <meta https-equiv="Content-type" content="text/html; charset=UTF-8" />
      </Head>

      <Nav light />

      <Header
        title={`Welcome to \n Metechi Blog!`}
        cta="Read On"
        image="/images/Blog/blog-cover.jpg"
        color={colors.darkGrey}
        onClick={() => scrollTo(document.querySelector(".blog-container"))}
      />

      <section ref={ref} className="blog-container max-container">
        <div className="posts">
          {state.map(post => (
            <Post key={post.id} post={post} tags={tags} />
          ))}
        </div>
        <div className="sidebar">
          <Sidebar tags={tags} />
        </div>
      </section>

      <section className="max-container pagination">
        <Pagination
          totalPages={totalPages}
          currentPage={p}
          onChange={fetchPosts}
        />
      </section>

      <FollowUs />

      <FormBackground>
        <AccessForm />
      </FormBackground>

      <style jsx>{`
        .blog-container {
          display: flex;
          justify-content: space-between;
          padding-top: 160px;
          padding-bottom: 110px;
        }

        .posts {
          flex: 1;
          max-width: 760px;
        }

        .sidebar {
          flex: 1 1 auto;
          max-width: 280px;
          margin-left: 40px;
        }

        .pagination {
          margin-bottom: 150px;
        }
      `}</style>
    </div>
  );
};

Blog.getInitialProps = async ({ query }) => {
  const { p } = query;
  const postURL = p
    ? `http://18.218.129.154/wp-json/wp/v2/posts?per_page=5&page=${p}`
    : "http://18.218.129.154/wp-json/wp/v2/posts?per_page=5";
  const postsReq = await fetch(postURL);
  const posts = await postsReq.json();
  const tagsReq = await fetch("http://18.218.129.154/wp-json/wp/v2/tags");
  const tags = await tagsReq.json();
  return { posts, tags, totalPages: postsReq.headers.get("x-wp-totalpages") };
};

export default Blog;
