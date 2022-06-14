import { PostList } from "./components";
import { Pagination } from "./components/Pagination";

import { useDataPosts } from "./hooks";

export const HomeFeature = () => {
  const { posts, pagination, onChangePagination } = useDataPosts();

  return (
    <div>
      <Pagination
        onChangePagination={onChangePagination}
        pagination={pagination}
      />
      <PostList posts={posts} />
    </div>
  );
};
