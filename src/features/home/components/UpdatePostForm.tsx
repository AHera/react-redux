/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useSinglePost } from "../../post/hooks";
import { useUpdatePost } from "../hooks";

export const UpdatePostForm = () => {
  const { singlePost } = useSinglePost();
  const { onUpdatePost, postUpdated } = useUpdatePost();

  return (
    <div
      css={css`
        margin: 30px;
      `}
    >
      <h1
        css={css`
          display: flex;
          justify-content: center;
          border: 1px solid;
          padding: 10px;
        `}
      >
        Update post
      </h1>

      <form
        onSubmit={onUpdatePost}
        css={css`
          display: flex;
          flex-direction: column;
          gap: 15px;
        `}
      >
        <h2>Title:</h2>
        <TextField
          id="standard-textarea"
          name="title"
          variant="standard"
          multiline
          maxRows={2}
          defaultValue={singlePost.title}
        />

        <h2>Description:</h2>
        <TextField
          id="standard-textarea"
          name="description"
          variant="standard"
          multiline
          maxRows={10}
          defaultValue={singlePost.body}
        />

        {postUpdated && <span>Post Updated!</span>}

        <Button type="submit" variant="contained" color="success">
          Update
        </Button>
      </form>
    </div>
  );
};
