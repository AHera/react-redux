import { useEffect, useState } from "react";

interface PostsInterface {
  id: number;
  title: string;
  body: string;
  tags: [];
  reactions: number;
  userId: number;
}

export const useDataPosts = () => {
  const [posts, setPosts] = useState([] as ReadonlyArray<PostsInterface>);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return {
    posts,
  };
};
