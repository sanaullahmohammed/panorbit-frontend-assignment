import { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashboardContainer from "./Pages/DashboardContainer";
import Login from "./Pages/Login";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="profile" element={<DashboardContainer />} />
      </Routes>
    </div>
  );
};

export default App;
