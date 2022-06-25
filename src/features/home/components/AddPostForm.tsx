/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useAddPost } from "../hooks";
import { FieldError } from "./FieldError";

interface Props {
  handleClose: () => void;
}

export const AddPostForm = ({ handleClose }: Props) => {
  const { onAddPost, errors } = useAddPost(handleClose);

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
      <FieldError
        isError={errors.title}
        title="The title must be in Latin and contein from 5 to 20 characters"
      />

      <TextField
        error={errors.description}
        name="description"
        label="Description"
        variant="filled"
      />
      <FieldError
        isError={errors.description}
        title="The description must be in Latin and contein from 20 characters"
      />

      <Button type="submit" variant="contained" color="success">
        Create
      </Button>
    </form>
  );
};
