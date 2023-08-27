import { FC, useContext, useState } from "react";
import ChangeProfile from "./ChangeProfile";
import UserListItem from "./UserListItem";
import { AppContext, defaultUser } from "../Contexts/AppContext.";
import { IUser } from "../Interfaces/IUser";
import "../Styles/Header.css";
import { NavLinksStrings } from "../Enum";

const Header: FC = () => {
  const [appState, dispatch] = useContext(AppContext);
  const [toggleChangeProfile, setToggleChangeProfile] =
    useState<boolean>(false);
  const user = appState.loggedInUser;

  function handleClick(user: IUser) {
    setToggleChangeProfile((prev) => !prev);
  }

  return (
    <div className="header">
      <span className="header-name">
        {NavLinksStrings[appState.navigation]}
      </span>
      <span className="header-user">
        <UserListItem
          key={user?.id}
          user={user === null ? defaultUser : user}
          handleClick={handleClick}
        />
      </span>
      {toggleChangeProfile ? <ChangeProfile /> : null}
    </div>
  );
};

export default Header;
