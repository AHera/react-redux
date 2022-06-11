import { SinglePost } from "./components";

import { useSinglePost } from "./hooks";

export const SinglePostFeature = () => {
  const { singlePost } = useSinglePost();

  return <SinglePost singlePost={singlePost} />;
};
