import React, { useRef } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { colors } from "../styles/theme";
import { scrollTo } from "../utils/scrollTo";
import { PostsProvider } from "../context/PostsContext";
import Nav from "../components/Nav";
import Header from "../components/Header";
import AccessForm from "../components/AccessForm";
import FormBackground from "../components/AccessForm/Background";
import FollowUs from "../components/FollowUs";
import Pagination from "../components/Blog/Pagination";
import Sidebar from "../components/Blog/Sidebar";
import PostsList from "../components/Blog/PostsList";

const Blog = ({ posts, tags, totalPages }) => {
  const ref = useRef();

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
        onClick={() => scrollTo(ref.current)}
      />

      <PostsProvider posts={posts} totalPages={totalPages}>
        <section ref={ref} className="blog-container max-container">
          <div className="posts">
            <PostsList tags={tags} />
          </div>
          <div className="sidebar">
            <Sidebar tags={tags} scrollToTop={() => scrollTo(ref.current)} />
          </div>
        </section>
        <section className="max-container pagination">
          <Pagination scrollToTop={() => scrollTo(ref.current)} />
        </section>
      </PostsProvider>

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
    ? `${process.env.wpURL}/wp-json/wp/v2/posts?per_page=5&page=${p}`
    : `${process.env.wpURL}/wp-json/wp/v2/posts?per_page=5`;
  const postsReq = await fetch(postURL);
  const posts = await postsReq.json();
  const tagsReq = await fetch(`${process.env.wpURL}/wp-json/wp/v2/tags`);
  const tags = await tagsReq.json();
  return { posts, tags, totalPages: postsReq.headers.get("x-wp-totalpages") };
};

export default Blog;
