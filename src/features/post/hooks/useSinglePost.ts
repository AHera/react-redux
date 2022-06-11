import { useEffect, useState } from "react";
import { SinglePostInterface } from "../inetrfaces";

export const useSinglePost = () => {
  const [singlePost, setSinglePost] = useState({} as SinglePostInterface);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setSinglePost(data);
      });
  }, []);

  return {
    singlePost,
  };
};
