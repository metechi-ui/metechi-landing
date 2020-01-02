import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const usePostList = posts => {
  const [postsList, setPostsList] = useState(posts);

  const fetchPostPerPage = async page => {
    const res = await fetch(
      `http://18.218.129.154/wp-json/wp/v2/posts?per_page=5&page=${page}`
    );
    const data = await res.json();
    setPostsList(data);
  };

  const searchPosts = async keyword => {
    const res = await fetch(
      `http://18.218.129.154/wp-json/wp/v2/posts?search=${keyword}`
    );
    const data = await res.json();
    setPostsList(data);
  };

  return { postsList, fetchPostPerPage, searchPosts };
};

export { usePostList };
