import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import { colors } from "../../styles/theme";
import Nav from "../../components/Nav";
import FollowUs from "../../components/FollowUs";
import AccessForm from "../../components/AccessForm";
import FormBackground from "../../components/AccessForm/Background";
import Sidebar from "../../components/Blog/Sidebar";
import { TagContainer, Tag } from "../../components/Blog/Tag";

const Post = ({ post, tags }) => {
  console.log(post);
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState({
    name: "",
    avatar_urls: []
  });

  useEffect(() => {
    const getCover = async () => {
      try {
        const res = await fetch(
          `http://18.218.129.154/wp-json/wp/v2/media/${post.featured_media}`
        );
        const data = await res.json();
        setCover(data.guid.rendered);
      } catch (error) {}
    };

    const getAuthor = async () => {
      try {
        const res = await fetch(
          `http://18.218.129.154/wp-json/wp/v2/users/${post.author}`
        );
        const data = await res.json();
        setAuthor(data);
      } catch (error) {}
    };

    getCover();
    getAuthor();
  }, []);

  return (
    <div>
      <Head>
        <title>Metechi - Post</title>
        <meta https-equiv="Content-type" content="text/html; charset=UTF-8" />
      </Head>

      <Nav light />

      <header>
        <div className="cover max-container wide with-padding">
          <h1>{post.title.rendered}</h1>
        </div>
      </header>

      <section>
        <div className="max-container">
          <div className="container">
            <div className="content">
              <div className="align-center">
                <figure className="avatar" />
                <div>
                  <p className="author-info">By Ofer Krichman</p>
                  <p className="author-info">12/12/2019</p>
                </div>
              </div>
              <div className="tags">
                <TagContainer>
                  <Tag text="CRE" />
                </TagContainer>
              </div>
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
            <div className="sidebar">
              <Sidebar tags={tags} />
            </div>
          </div>
        </div>
      </section>

      <FollowUs />

      <FormBackground>
        <AccessForm />
      </FormBackground>

      <style jsx>{`
        header {
          position: relative;
          height: 560px;
          background-image: ${cover ? `url("${cover}")` : "none"};
          background-color: ${colors.lightGrey};
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          margin-top: -96px;
        }

        header:before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5) 5%,
              rgba(0, 0, 0, 0.23) 65%
            ),
            linear-gradient(
              to bottom,
              rgba(0, 59, 220, 0.3),
              rgba(0, 59, 220, 0.3)
            );
        }

        .cover {
          height: 100%;
          display: flex;
          align-items: center;
        }

        h1 {
          font-size: 62px;
          color: ${colors.white};
          z-index: 10;
        }

        section {
          position: relative;
          margin-top: -80px;
        }

        .container {
          display: flex;
          background-color: ${colors.white};
          padding: 30px;
          padding-bottom: 180px;
        }

        .content {
          flex: 1;
        }

        .sidebar {
          flex: 1 1 auto;
          max-width: 280px;
          margin-left: 40px;
        }

        .avatar {
          width: 36px;
          height: 36px;
          background-image: url("${author.avatar_urls[48]}");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          border-radius: 50%;
          margin-right: 15px;
        }

        .author-info {
          font-size: 14px;
          color: ${colors.grey};
        }

        .tags {
          margin-top: 25px;
          margin-bottom: 20px;
        }

        .text {
          font-size: 19px;
        }
      `}</style>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const { postId } = query;
  const res = await fetch(
    `http://18.218.129.154/wp-json/wp/v2/posts/${postId}`
  );
  const post = await res.json();
  const tagsReq = await fetch("http://18.218.129.154/wp-json/wp/v2/tags");
  const tags = await tagsReq.json();
  return { post, tags };
};

export default Post;
