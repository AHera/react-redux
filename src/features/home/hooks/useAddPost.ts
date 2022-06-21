import { title } from "process";
import { useState } from "react";
import { Errors, Fields } from "../interfaces";

export const useAddPost = () => {
  const [errors, setErrors] = useState({} as Errors);

  const newErrors = {
    title: false,
    description: false,
  };

  const validate = (fields: Fields) => {
    if (fields.title.length < 5) {
      newErrors.title = true;
    }

    if (fields.description.length < 5) {
      newErrors.description = true;
    }

    setErrors({
      ...errors,
      title: newErrors.title,
      description: newErrors.description,
    });
  };

  const onAddPost = (event: any) => {
    event.preventDefault();

    validate({
      title: event.target.title.value,
      description: event.target.description.value,
    });

    // fetch("https://dummyjson.com/posts/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     title: "I am in love with someone.",
    //     userId: 5,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then(console.log);
  };

  return { onAddPost, errors };
};
