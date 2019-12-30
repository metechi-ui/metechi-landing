import React from "react";

import { TagContainer, Tag } from "./Tag";
import Searchbar from "../Searchbar";

const Sidebar = ({ tags }) => {
  return (
    <div>
      <Searchbar placeholder="Search articles" />
      <div className="tags">
        <TagContainer>
          {tags.map(({ id, name, count }) => (
            <Tag key={id} text={`${name} (${count})`} />
          ))}
        </TagContainer>
      </div>
      <hr />
      <div className="newsletter">
        <p>Subscribe to our newsletter</p>
        <Searchbar placeholder="Email" />
      </div>
      <style jsx>{`
        .tags {
          margin: 40px 0;
        }

        hr {
          border-top: solid 1px #e3e3e9;
        }

        .newsletter {
          margin-top: 30px;
        }

        p {
          font-size: 15px;
          letter-spacing: -0.17px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
