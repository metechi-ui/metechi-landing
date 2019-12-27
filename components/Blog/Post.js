import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import { colors } from "../../styles/theme";
import { TagContainer, Tag } from "./Tag";

const Post = ({ post, tags }) => {
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

  const formattedDate = useMemo(() => {
    const date = new Date(post.date);
    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }, [post.date]);

  const formattedTags = useMemo(() => {
    return post.tags.map(tagId => tags.find(({ id }) => tagId === id));
  }, [post.tags]);

  return (
    <>
      <article>
        <div className="cover" />
        <div className="content">
          <h2>{post.title.rendered}</h2>
          <div className="flex">
            <figure className="avatar" />
            <div>
              <p className="avatar-info">By {author.name}</p>
              <p className="avatar-info">{formattedDate}</p>
            </div>
          </div>
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div className="align-center">
            <TagContainer>
              {formattedTags.map(({ id, name }) => (
                <Tag key={id} text={name} />
              ))}
            </TagContainer>
            <Link href={`/post/${post.id}`}>
              <a className="cta">
                Read Article <div className="triangle blue" />
              </a>
            </Link>
          </div>
        </div>
      </article>

      <style jsx>{`
        article {
          border: solid 1px ${colors.lightGrey};
          margin-bottom: 50px;
        }

        article:last-child {
          margin-bottom: 0;
        }

        .cover {
          height: 280px;
          background-image: ${cover ? `url("${cover}")` : "none"};
          background-color: ${colors.lightGrey};
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }

        .content {
          padding: 30px;
        }

        h2 {
          font-size: 42px;
          margin-bottom: 10px;
        }

        .avatar {
          width: 36px;
          height: 36px;
          background-image: url("${author.avatar_urls[48]}");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          border-radius: 50%;
        }

        .avatar-info {
          margin-left: 15px;
          font-size: 14px;
          color: ${colors.grey};
        }

        .text {
          font-size: 16px;
          margin-top: 25px;
          margin-bottom: 30px;
        }

        .cta {
          min-width: 110px;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.23px;
          color: ${colors.blue};
          margin-left: auto;
          text-decoration: none;
        }

        .blue {
          color: ${colors.blue};
        }
      `}</style>
    </>
  );
};

export default Post;
