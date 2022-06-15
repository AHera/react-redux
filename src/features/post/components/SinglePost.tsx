/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SinglePostInterface } from "../inetrfaces";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface Props {
  singlePost: SinglePostInterface;
}

export const SinglePost = ({
  singlePost: { title, body, tags, reactions, userId },
}: Props) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 20px;
      padding: 20px;
      border: 1px solid;
    `}
  >
    <h3>{title}</h3>
    <p>{body}</p>
    <p>Reactions: {reactions}</p>
    <p>User ID: {userId}</p>
    <Link
      to="/"
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin: 20px;
      `}
    >
      <Button variant="outlined">Go back</Button>
    </Link>
    {/* <p>Post tags:</p>
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {tags.map((oneTag) => (
        <span
          key={RandomId(3)}
          css={css`
            border: 1px solid;
            margin: 5px;
            padding: 3px;
            cursor: pointer;
          `}
        >
          {oneTag}
        </span>
      ))}
    </div> */}
  </div>
);
