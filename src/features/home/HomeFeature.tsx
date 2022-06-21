import { AddPostPopup, PostList } from "./components";
import { Pagination } from "./components/Pagination";

import { useDataPosts } from "./hooks";

export const HomeFeature = () => {
  const { posts, pagination, onChangePagination } = useDataPosts();

  return (
    <div>
      <AddPostPopup />
      <PostList posts={posts} />
      <Pagination
        onChangePagination={onChangePagination}
        pagination={pagination}
      />
    </div>
  );
};
