import { useState } from "react";
import { Errors, Fields } from "../interfaces";

export const useAddPost = (handleClose: () => void) => {
  const [errors, setErrors] = useState({} as Errors);

  const newErrors = {
    title: false,
    description: false,
  };

  const validate = (fields: Fields) => {
    let isValid = true;

    if (!/^[a-zA-Z ]{5,20}$/.test(fields.title)) {
      newErrors.title = true;
      isValid = false;
    }

    if (!/^[a-zA-Z ]{20,}$/.test(fields.description)) {
      newErrors.description = true;
      isValid = false;
    }

    setErrors({
      ...errors,
      title: newErrors.title,
      description: newErrors.description,
    });

    return isValid;
  };

  const clearForm = (target: any) => {
    target.title.value = "";
    target.description.value = "";
  };

  const onAddPost = (event: any) => {
    event.preventDefault();

    const dataSend = {
      title: event.target.title.value,
      description: event.target.description.value,
      userId: 1,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataSend),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
        clearForm(event.target);
      });
  };

  return { onAddPost, errors };
};
