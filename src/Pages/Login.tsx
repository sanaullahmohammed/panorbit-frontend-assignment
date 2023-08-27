import { FC, useContext, useEffect } from "react";
import {
  AppContext,
  SET_LOGGED_IN_USER,
  SET_USERS,
} from "../Contexts/AppContext.";
import { IUser } from "../Interfaces/IUser";
import UserListItem from "../Components/UserListItem";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

const fetchUsers = async (): Promise<IUser[]> => {
  try {
    const response = await fetch("https://panorbit.in/api/users.json");
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

const Login: FC = () => {
  const [appState, dispatch] = useContext(AppContext);
  const navigate = useNavigate();

  function handleClick(user: IUser) {
    dispatch({ type: SET_LOGGED_IN_USER, payload: user });
    navigate(`profile`);
  }

  useEffect(() => {
    if (appState.users.length === 0) {
      (async () => {
        const users = await fetchUsers();
        dispatch({ type: SET_USERS, payload: users });
      })();
    }
  }, [appState.users.length, dispatch]);

  return (
    <main className="main">
      <div className="accounts-list">
        <div className="account-list-header">Select an account</div>
        <div className="account-list-body">
          {appState.users.map((user) => (
            <UserListItem key={user.id} user={user} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Login;
