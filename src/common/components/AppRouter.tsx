import { Route, Routes } from "react-router-dom";
import { HomeFeature, SinglePostFeature } from "../../features";
import { UpdatePostForm } from "../../features/home/components";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/post/:postId" element={<SinglePostFeature />} />
    <Route path="/post-update/:postId" element={<UpdatePostForm />} />
  </Routes>
);
