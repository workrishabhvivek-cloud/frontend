import "./App.css";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

import { Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <>
      {/* <Home></Home> */}

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
