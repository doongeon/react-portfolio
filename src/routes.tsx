import { Route, Routes } from "react-router-dom";
import FollowingCode from "./routes/FollowingCode";
import ShiningBox from "./routes/ShiningBox";
import TrackingCard from "./routes/TrackingCard";

const Router = () => {
  return (
    <Routes>
      <Route path="/following-code" element={<FollowingCode />} />
      <Route path="/shining-box" element={<ShiningBox />} />
      <Route path="/tracking-card" element={<TrackingCard />} />
    </Routes>
  );
};

export default Router;
