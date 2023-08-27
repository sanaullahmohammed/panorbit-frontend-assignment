import { FC } from "react";
import { IUser } from "../Interfaces/IUser";
import "../Styles/UserListItem.css";

interface UserListItemProps {
  user: IUser;
  handleClick: (user: IUser) => void;
  showDot?: boolean;
  isActive?: boolean;
}

const UserListItem: FC<UserListItemProps> = ({
  user,
  handleClick,
  showDot = false,
  isActive = false,
}) => {
  return (
    <div className="user-list-card" onClick={() => handleClick(user)}>
      <img
        className="profile-picture"
        src={user?.profilepicture}
        alt="profile"
      />
      <span className="name">{user?.name}</span>
      {showDot ? (
        <span className={`dot ${isActive ? "green" : "gray"}`}></span>
      ) : null}
    </div>
  );
};

export default UserListItem;
