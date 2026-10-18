import React from "react";
import { Outlet, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Listemployee">List Employee</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
