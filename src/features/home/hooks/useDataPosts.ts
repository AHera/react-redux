import { useEffect, useRef, useState } from "react";
import { PaginationInterface, PostsInterface } from "../interfaces";

export const useDataPosts = () => {
  const [posts, setPosts] = useState([] as Array<PostsInterface>);
  const setIsTotal = useRef(false);
  const [pagination, setPagination] = useState({
    limit: 6,
    total: 100,
    page: 1,
  } as PaginationInterface);

  const { page, limit } = pagination;

  const onChangePagination = (e: any, value: number) => {
    setPagination({ ...pagination, page: value });
  };

  const nextSkip = page === 1 ? 0 : (page - 1) * limit;

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${nextSkip}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        if (!setIsTotal.current) {
          setPagination({
            ...pagination,
            total: Math.round(data.total / limit),
          });
          setIsTotal.current = true;
        }
      });
  }, [pagination.page]);

  return {
    posts,
    onChangePagination,
    pagination,
  };
};
