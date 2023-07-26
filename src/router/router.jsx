import { Routes, Route } from "react-router";
import HomePage from "../pages/homePage.jsx";

function RouterApp(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
export default RouterApp;
