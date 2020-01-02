import React, { useState } from "react";
import { useRouter } from "next/router";

import { usePostsList } from "../../context/PostsContext";
import Searchbar from "../Searchbar";
import { TagContainer, Tag } from "./Tag";

const Sidebar = ({ tags, scrollToTop }) => {
  const [search, setSearch] = useState("");
  const { actions } = usePostsList();
  const router = useRouter();

  const handleSearch = async event => {
    if (event.keyCode === 13) {
      await actions.searchPosts(search);
      scrollToTop();
      const url = search ? `/blog?search=${search}&p=1` : `/blog?p=1`;
      router.push(url, url, {
        shallow: true
      });
    }
  };

  return (
    <div>
      <Searchbar
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Search articles"
        withIcon
      />
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
