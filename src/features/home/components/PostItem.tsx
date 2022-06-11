/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostsInterface } from "../interfaces";

interface Props {
  post: PostsInterface;
}

export const PostItem = ({ post }: Props) => (
  <div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);
