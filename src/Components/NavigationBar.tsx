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
      </div>
      <div
        className={`nav-item ${
          activeNavItem === NavLinks.Posts ? "active" : ""
        }`}
        onClick={() => handleClick(NavLinks.Posts)}
      >
        Posts
      </div>
      <div
        className={`nav-item ${
          activeNavItem === NavLinks.Gallery ? "active" : ""
        }`}
        onClick={() => handleClick(NavLinks.Gallery)}
      >
        Gallery
      </div>
      <div
        className={`nav-item ${
          activeNavItem === NavLinks.ToDo ? "active" : ""
        }`}
        onClick={() => handleClick(NavLinks.ToDo)}
      >
        ToDo
      </div>
      <div className="indicator">
        <FontAwesomeIcon className="angle-icon" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default NavigationBar;
