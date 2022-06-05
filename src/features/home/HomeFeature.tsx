/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import RandomId from "../../common";

import { useDataPosts } from "./hooks";

export const HomeFeature = () => {
  const { posts } = useDataPosts();

  return (
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
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Post tags:</p>
          <div>
            {post.tags.map((tag) => (
              <span
                key={RandomId(3)}
                css={css`
                  border: 1px solid;
                  margin: 5px;
                  padding: 3px;
                  cursor: pointer;
                `}
              >
                {tag}
              </span>
            ))}
          </div>
          <p>Reactions: {post.reactions}</p>
          <p>User ID: {post.userId}</p>
        </div>
      ))}
    </div>
  );
};
