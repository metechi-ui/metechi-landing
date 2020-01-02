import React from "react";
import Link from "next/link";

import usePost from "../../../hooks/usePost";
import { colors } from "../../../styles/theme";
import { TagContainer, Tag } from "../Tag";

const Preview = ({ post, tags }) => {
  const { cover, name, avatar_urls, date, postTags } = usePost({ post, tags });

  return (
    <>
      <article>
        <Link href={`/post/${post.id}`}>
          <div className="cover" />
        </Link>
        <div className="content">
          <Link href={`/post/${post.id}`}>
            <h3>{post.title.rendered}</h3>
          </Link>
          <div className="author">
            <figure />
            <div>
              <p>By {name}</p>
              <p>{date}</p>
            </div>
          </div>
          <div className="align-end">
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
          flex: 1;
          border: solid 1px ${colors.lightGrey};
          margin: 0 15px;
        }

        .cover {
          height: 200px;
          background-image: ${cover ? `url("${cover}")` : "none"};
          background-color: ${colors.lightGrey};
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          cursor: pointer;
        }

        .content {
          min-height: 275px;
          display: flex;
          flex-direction: column;
          padding: 25px 20px;
        }

        .author {
          display: flex;
          align-items: center;
          margin-bottom: auto;
        }

        h3 {
          font-size: 30px;
          margin-bottom: 22px;
          cursor: pointer;
        }

        figure {
          width: 36px;
          height: 36px;
          background-color: ${colors.lightGrey};
          background-image: url("${avatar_urls[48]}");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          border-radius: 50%;
          margin-right: 15px;
        }

        p {
          font-size: 14px;
          color: ${colors.grey};
        }

        .cta {
          min-width: 110px;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -0.2px;
          color: ${colors.blue};
          margin-left: auto;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Preview;
