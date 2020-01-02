import React from "react";
import Link from "next/link";

import usePost from "../../hooks/usePost";
import { colors } from "../../styles/theme";
import { TagContainer, Tag } from "./Tag";

const Post = ({ post, tags }) => {
  const { cover, name, avatar_urls, date, postTags } = usePost({ post, tags });

  return (
    <>
      <article>
        <Link href={`/post/${post.id}`}>
          <div className="cover" />
        </Link>
        <div className="content">
          <Link href={`/post/${post.id}`}>
            <h2>{post.title.rendered}</h2>
          </Link>
          <div className="flex">
            <figure className="avatar" />
            <div>
              <p className="avatar-info">By {name}</p>
              <p className="avatar-info">{date}</p>
            </div>
          </div>
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div className="align-center">
            <TagContainer>
              {postTags.map(({ id, name }) => (
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
          cursor: pointer;
        }

        .content {
          padding: 30px;
        }

        h2 {
          font-size: 42px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .avatar {
          width: 36px;
          height: 36px;
          background-image: url("${avatar_urls[48]}");
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
