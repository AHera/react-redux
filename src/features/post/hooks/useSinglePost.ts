import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SinglePostInterface } from "../inetrfaces";

export const useSinglePost = () => {
  const [singlePost, setSinglePost] = useState({} as SinglePostInterface);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePost(data);
      });
  }, []);

  return {
    singlePost,
  };
};
