/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useAddPost } from "../hooks";

export const AddPostForm = () => {
  const { onAddPost, errors } = useAddPost();
  return (
    <form
      onSubmit={onAddPost}
      css={css`
        display: flex;
        flex-direction: column;
        gap: 15px;
      `}
    >
      <TextField
        error={errors.title}
        name="title"
        label="Title"
        variant="filled"
      />
      <TextField
        error={errors.description}
        name="description"
        label="Description"
        variant="filled"
      />
      <Button type="submit" variant="contained" color="success">
        Create
      </Button>
    </form>
  );
};
