import { PostList } from "./components";

import { useDataPosts } from "./hooks";

export const HomeFeature = () => {
  const { posts } = useDataPosts();

  return <PostList posts={posts} />;
};
