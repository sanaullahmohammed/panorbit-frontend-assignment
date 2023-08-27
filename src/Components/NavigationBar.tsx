import { FC, useContext, useState } from "react";
import { NavLinks } from "../Enum";
import { AppContext, SET_NAVIGATION } from "../Contexts/AppContext.";
import "../Styles/NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const NavigationBar: FC = () => {
  const [appState, dispatch] = useContext(AppContext);
  const [activeNavItem, setActiveNavItem] = useState(NavLinks.Profile);

  const handleClick = (navLink: NavLinks) => {
    if (navLink !== appState.navigation) {
      dispatch({ type: SET_NAVIGATION, payload: navLink });
      setActiveNavItem(navLink);
    }
  };
  // This can be rendered using NavLinksStrings

  return (
    <div className="nav-bar">
      <div
        className={`nav-item ${
          activeNavItem === NavLinks.Profile ? "active" : ""
        }`}
        onClick={() => handleClick(NavLinks.Profile)}
      >
        Profile
        <span
          className={`${
            activeNavItem === NavLinks.Profile ? "indicator-1" : "disp-none"
          }`}
        >
          <FontAwesomeIcon className="angle-icon" icon={faAngleRight} />
        </span>
      </div>
      <div
        className={`nav-item ${
          activeNavItem === NavLinks.Posts ? "active" : ""
        }`}
        onClick={() => handleClick(NavLinks.Posts)}
      >
        Posts
        <span
          className={`${
            activeNavItem === NavLinks.Posts ? "indicator-2" : "disp-none"
          }`}
        >
          <FontAwesomeIcon className="angle-icon" icon={faAngleRight} />
        </span>
      </div>
      <div
        className={`nav-item ${
          activeNavItem === NavLinks.Gallery ? "active" : ""
        }`}
        onClick={() => handleClick(NavLinks.Gallery)}
      >
        Gallery
        <span
          className={`${
            activeNavItem === NavLinks.Gallery ? "indicator-3" : "disp-none"
          }`}
        >
          <FontAwesomeIcon className="angle-icon" icon={faAngleRight} />
        </span>
      </div>
      <div
        className={`nav-item ${
          activeNavItem === NavLinks.ToDo ? "active" : ""
        }`}
        onClick={() => handleClick(NavLinks.ToDo)}
      >
        ToDo
        <span
          className={`${
            activeNavItem === NavLinks.ToDo ? "indicator-4" : "disp-none"
          }`}
        >
          <FontAwesomeIcon className="angle-icon" icon={faAngleRight} />
        </span>
      </div>

      {/* <div className="indicator">
        <FontAwesomeIcon className="angle-icon" icon={faAngleRight} />
      </div> */}
    </div>
  );
};

export default NavigationBar;
