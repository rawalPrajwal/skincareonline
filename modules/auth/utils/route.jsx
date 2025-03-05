import { Routes, Route } from "react-router-dom";
import Login from "../login";
import Register from "../register";
import { AuthUrls } from "./url";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={AuthUrls.login} element={<Login />} />
      <Route path={AuthUrls.register} element={<Register />} />
    </Routes>
  );
};
