import { FC, useContext } from "react";
import "../Styles/ChangeProfile.css";
import { AppContext, SET_LOGGED_IN_USER } from "../Contexts/AppContext.";
import UserListItem from "./UserListItem";
import { IUser } from "../Interfaces/IUser";
import { useNavigate } from "react-router-dom";

const ChangeProfile: FC = () => {
  const [appState, dispatch] = useContext(AppContext);
  const { loggedInUser } = appState;
  const navigate = useNavigate();

  function handleClick(user: IUser) {
    dispatch({ type: SET_LOGGED_IN_USER, payload: user });
  }

  function handleSignOut() {
    dispatch({ type: SET_LOGGED_IN_USER, payload: null });
    navigate(`/`);
  }

  return (
    <div className="change-profile-card">
      <div className="logged-in-user-details">
        <img
          className="card-user-img"
          src={loggedInUser?.profilepicture}
          alt={loggedInUser?.name}
        />
        <div className="card-name">{loggedInUser?.name}</div>
        <div className="card-email">{loggedInUser?.email}</div>
      </div>
      <div className="other-accounts-list">
        {appState.users.map((user) => {
          if (loggedInUser !== user) {
            return (
              <UserListItem
                key={user.id}
                user={user}
                handleClick={handleClick}
              />
            );
          }
        })}
      </div>
      <div className="button-container">
        <button className="sign-out-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ChangeProfile;
