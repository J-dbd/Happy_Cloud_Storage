import { Link } from "react-router-dom";
import "./header.css";
import HCSLogo from "/HCS_logo.svg";

const Header = () => {
  return (
    <header>
      <div id="header_logo_container">
        <h1 id="logo_box">
          <Link to={`/`} id="logo_link">
            <img src={HCSLogo} alt="Happy Cloud Storage Logo" />
          </Link>
        </h1>
      </div>

      <Link
        to={`login`}
        id="header_login"
        className="text-black bg-blue-200 hover:bg-yellow-400
        focus:outline-none  font-medium
        rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600
        dark:hover:bg-blue-700 cursor-pointer"
      >
        로그인
      </Link>
    </header>
  );
};

export default Header;
