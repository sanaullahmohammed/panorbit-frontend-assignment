import { createContext, Dispatch, ReactNode, useReducer, FC } from "react";
import { IUser } from "../Interfaces/IUser";
import { NavLinks } from "../Enum";

export const defaultUser: IUser = {
  id: 1,
  name: "",
  username: "",
  email: "",
  profilepicture: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

type AppState = {
  navigation: NavLinks;
  loggedInUser: IUser | null;
  users: IUser[];
  showChat: {
    isShowChat: boolean;
    showUser: IUser;
  };
};

type AppAction = {
  type: string;
  payload: any;
};

// Define the initial state
const initialState: AppState = {
  navigation: NavLinks.Profile,
  loggedInUser: null,
  users: [], // Initialize with your API data
  showChat: {
    isShowChat: false,
    showUser: defaultUser,
  },
};

// Define action types
export const SET_NAVIGATION = "SET_NAVIGATION";
export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";
export const SET_USERS = "SET_USERS";
export const SET_SHOW_CHAT = "SET_SHOW_CHAT";

// Define your reducer function
const appReducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case SET_NAVIGATION:
      return { ...state, navigation: action.payload };
    case SET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    // Define other cases as needed
    case SET_SHOW_CHAT:
      return { ...state, showChat: action.payload };
    default:
      return state;
  }
};

// Define the context
export const AppContext = createContext<[AppState, Dispatch<AppAction>]>([
  initialState,
  () => {},
]);

// Define the AppProvider component
type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const value: [AppState, Dispatch<AppAction>] = useReducer(
    appReducer,
    initialState
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
