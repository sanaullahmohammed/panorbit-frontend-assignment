import { FC, useContext, useState } from "react";
import "../../Styles/Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faAnglesRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { IUser } from "../../Interfaces/IUser";
import { AppContext, SET_SHOW_CHAT } from "../../Contexts/AppContext.";

interface ChatProps {
  user: IUser;
}

const Chat: FC<ChatProps> = ({ user }) => {
  const [appState, dispatch] = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);

  function expandToggle() {
    setExpanded((prevState) => !prevState);
  }

  function handleCloseChat() {
    dispatch({ type: SET_SHOW_CHAT, payload: { isShowChat: false } });
  }

  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <span className="left">
            <img
              className="chat-header-img"
              src={user.profilepicture}
              alt={user.name}
            />
            <span className="chat-header-name">{user.name}</span>
          </span>
          <span className="right">
            <FontAwesomeIcon
              className="angle-down"
              icon={expanded ? faAngleDown : faAngleUp}
              onClick={() => expandToggle()}
            />
            <FontAwesomeIcon
              className="x-mark"
              icon={faXmark}
              onClick={handleCloseChat}
            />
          </span>
        </div>
        {expanded ? (
          <>
            <div className="chat-body">
              <div className="left-msg">
                Lorem ipsum dolor sit amet, consectectur
              </div>
              <div className="left-msg">Lorem ipsum dolor sit</div>
              <div className="time">9:16 PM</div>
              <div className="right-msg">Lorem ipsum dolor</div>
              <div className="right-msg">Lorem ipsum</div>
            </div>
            <div className="chat-footer">
              <span className="chat-input">
                <input type="text" />
              </span>
              <FontAwesomeIcon className="send-icon" icon={faAnglesRight} />
            </div>{" "}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Chat;
