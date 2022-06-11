import { Route, Routes } from "react-router-dom";
import { HomeFeature, SinglePostFeature } from "../../features";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/post-1" element={<SinglePostFeature />} />
  </Routes>
);
