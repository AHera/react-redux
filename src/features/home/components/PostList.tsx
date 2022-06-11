/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PostsInterface } from "../interfaces";
import { PostItem } from "./PostItem";

interface Props {
  posts: PostsInterface[];
}

export const PostList = ({ posts }: Props) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {posts.map((post) => (
      <div
        key={post.id}
        css={css`
          border: 1px solid;
          margin: 10px;
          padding: 10px;
          width: 250px;
        `}
      >
        <PostItem post={post} />
      </div>
    ))}
  </div>
);
