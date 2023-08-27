import { FC, useContext, useState } from "react";
import "../../Styles/ChatsBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import UserListItem from "../UserListItem";
import { AppContext, SET_SHOW_CHAT } from "../../Contexts/AppContext.";
import { IUser } from "../../Interfaces/IUser";

const ChatsBox: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [appState, dispatch] = useContext(AppContext);

  function expandToggle() {
    setExpanded(!expanded);
  }

  function handleClick(user: IUser) {
    console.log(user);
    dispatch({
      type: SET_SHOW_CHAT,
      payload: { isShowChat: true, showUser: user },
    });
  }

  return (
    <div className="chats-box">
      <div className="chats-box-header" onClick={() => expandToggle()}>
        <span className="left">
          <FontAwesomeIcon className="message-icon" icon={faMessage} />
          Chats
        </span>
        <FontAwesomeIcon icon={expanded ? faAngleDown : faAngleUp} />
      </div>
      {expanded ? (
        <div className="chats-box-body">
          {appState.users.map((user) => {
            if (appState.loggedInUser !== user) {
              return (
                <UserListItem
                  key={user.id}
                  user={user}
                  handleClick={handleClick}
                  showDot={true}
                  isActive={Math.random() < 0.5 ? true : false}
                />
              );
            }
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ChatsBox;
