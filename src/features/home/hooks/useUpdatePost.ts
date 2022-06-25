import { useState } from "react";
import { useParams } from "react-router";

export const useUpdatePost = () => {
  const { postId } = useParams();
  const [postUpdated, setPostUpdate] = useState(false);

  const onUpdatePost = (event: any) => {
    event.preventDefault();

    const dataSend = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    fetch(`https://dummyjson.com/posts/${postId}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    })
      .then((res) => res.json())
      .then((data) => {
        setPostUpdate(true);
      });
  };

  return { onUpdatePost, postUpdated };
};
