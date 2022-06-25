import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { PostsInterface } from "../interfaces";

interface Props {
  post: PostsInterface;
}

export const PostItem = ({ post: { id, title, body } }: Props) => (
  <div>
    <h3>
      <Link to={`/post/${id}`}>{title}</Link>
    </h3>
    <p>{body}</p>
    <Button>
      <Link to={`/post-update/${id}`}>Update Post</Link>
    </Button>
  </div>
);
