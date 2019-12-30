import { useReducer, useEffect, useMemo } from "react";
import fetch from "isomorphic-unfetch";

const initialState = {
  cover: "",
  name: "",
  avatar_urls: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COVER":
      return {
        ...state,
        cover: action.payload
      };

    case "SET_AUTHOR":
      return {
        ...state,
        name: action.payload.name,
        avatar_urls: action.payload.avatar_urls
      };

    default:
      return state;
  }
};

const usePost = ({ post, tags }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = useMemo(() => {
    const date = new Date(post.date);
    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }, [post.date]);

  const postTags = useMemo(() => {
    return post.tags.map(tagId => tags.find(({ id }) => tagId === id));
  }, [post.tags]);

  useEffect(() => {
    const getCover = async () => {
      try {
        const res = await fetch(
          `http://18.218.129.154/wp-json/wp/v2/media/${post.featured_media}`
        );
        const data = await res.json();
        dispatch({ type: "SET_COVER", payload: data.guid.rendered });
      } catch (error) {}
    };

    const getAuthor = async () => {
      try {
        const res = await fetch(
          `http://18.218.129.154/wp-json/wp/v2/users/${post.author}`
        );
        const data = await res.json();
        dispatch({ type: "SET_AUTHOR", payload: data });
      } catch (error) {}
    };

    getCover();
    getAuthor();
  }, []);

  return { ...state, date, postTags };
};

export default usePost;
