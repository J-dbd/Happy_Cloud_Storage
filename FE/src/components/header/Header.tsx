import { Link } from "react-router-dom";
import "./header.css";
import HCSLogo from "/HCS_logo.svg";
import { useState } from "react";

import myStLogo from "/myStorage_logo.svg";
import globalStLogo from "/globalStorage.logo.svg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header>
      <div className="header_logo_container">
        <h1 id="logo_box">
          <Link to={`/`} id="logo_link">
            <img src={HCSLogo} alt="Happy Cloud Storage Logo" />
          </Link>
        </h1>
      </div>
      <div className="header_storages-container">
        <Link to={`my-storage`} className="storage-logo-box">
          <img src={myStLogo} alt="My storage" />
        </Link>
        <span className="storage-logo-box">
          <img src={globalStLogo} alt="Global storage" />
        </span>
      </div>
      <div className="header_button_container ">
        <Link
          to={`login`}
          id="button_login"
          className="text-black bg-blue-200 hover:bg-yellow-400
        focus:outline-none  font-medium
        rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600
        dark:hover:bg-blue-700 cursor-pointer"
        >
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
