import { createContext, useContext, useReducer } from "react";
import fetch from "isomorphic-unfetch";

const PostsStateContext = createContext();
const PostsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        postList: action.payload,
        isSearch: false
      };

    case "search":
      return {
        ...state,
        postList: action.payload.posts,
        totalPages: action.payload.totalPages,
        isSearch: true
      };

    default:
      return state;
  }
};

const PostsProvider = ({ posts, totalPages, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    postList: posts,
    totalPages,
    isSearch: false
  });

  const fetchPostPerPage = async page => {
    const res = await fetch(
      `http://18.218.129.154/wp-json/wp/v2/posts?per_page=5&page=${page}`
    );
    const data = await res.json();
    dispatch({ type: "fetch", payload: data });
  };

  const searchPosts = async (keyword, page = 1) => {
    const res = await fetch(
      `http://18.218.129.154/wp-json/wp/v2/posts?search=${keyword}&per_page=5&page=${page}`
    );
    const posts = await res.json();
    const totalPages = res.headers.get("x-wp-totalpages");
    dispatch({ type: "search", payload: { posts, totalPages } });
  };

  return (
    <PostsStateContext.Provider value={state}>
      <PostsDispatchContext.Provider value={{ fetchPostPerPage, searchPosts }}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsStateContext.Provider>
  );
};

const usePostsList = () => {
  const state = useContext(PostsStateContext);
  const actions = useContext(PostsDispatchContext);
  return { ...state, actions };
};

export { PostsProvider, usePostsList, PostsStateContext, PostsDispatchContext };
