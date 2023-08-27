import { FC, useContext } from "react";
import { AppContext } from "../Contexts/AppContext.";
import NavigationBar from "../Components/NavigationBar";
import Profile from "../Components/Profile";
import ComingSoon from "../Components/ComingSoon";
import { NavLinks } from "../Enum";
import Header from "../Components/Header";
import "../Styles/DashboardContainer.css";
import ChatsBox from "../Components/ChatBox/ChatsBox";
import Chat from "../Components/ChatBox/Chat";

const DashboardContainer: FC = () => {
  const [appState, dispatch] = useContext(AppContext);
  const { showChat } = appState;
  const { isShowChat, showUser } = showChat;

  return (
    <div className="dashboard-container">
      {appState.loggedInUser === null ? (
        <h1>No Logged-in User Found! Go back to Landing-Page</h1>
      ) : (
        <>
          <div className="dashboard-main">
            <NavigationBar />
            <section className="screen-section">
              <Header />
              {appState.navigation === NavLinks.Profile ? (
                <Profile />
              ) : (
                <ComingSoon />
              )}
            </section>
          </div>
          <ChatsBox />
          {isShowChat && <Chat user={showUser} />}
        </>
      )}
    </div>
  );
};

export default DashboardContainer;
