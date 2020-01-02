import React from "react";
import { useRouter } from "next/router";
import { stringify } from "querystring";

import Pagination from "../Pagination";
import { usePostsList } from "../../context/PostsContext";

const BlogPagination = ({ scrollToTop }) => {
  const { totalPages, actions } = usePostsList();
  const router = useRouter();
  const { p, search } = router.query;

  const onSearch = async page => {
    if (search) {
      await actions.searchPosts(search, page);
    } else {
      await actions.fetchPostPerPage(page);
    }
    scrollToTop();
    const query = stringify({ search, p: page });
    router.push(`/blog?${query}`, `/blog?${query}`, { shallow: true });
  };

  return (
    <Pagination totalPages={totalPages} currentPage={p} onChange={onSearch} />
  );
};

export default BlogPagination;
