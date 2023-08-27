import { FC, useContext } from "react";
import { AppContext } from "../Contexts/AppContext.";
import "../Styles/Profile.css";
import Map from "../static/google-map.jpg";

const Profile: FC = () => {
  const [appState, dispatch] = useContext(AppContext);
  const { loggedInUser } = appState;
  return (
    <div className="profile">
      {/* Left Section */}
      <div className="profile-left">
        {/* Upper Div */}
        <div className="user-details">
          <img
            className="user-img"
            src={loggedInUser?.profilepicture}
            alt={`${loggedInUser?.name}`}
          ></img>
          <div className="profile-item text-center">{loggedInUser?.name}</div>
          <div className="profile-item">
            <span className="label">Username</span>
            <span className="data">{loggedInUser?.username}</span>
          </div>
          <div className="profile-item">
            <span className="label">e-mail</span>
            <span className="data">{loggedInUser?.email}</span>
          </div>
          <div className="profile-item">
            <span className="label">Phone</span>
            <span className="data">{loggedInUser?.phone}</span>
          </div>
          <div className="profile-item">
            <span className="label">Website</span>
            <span className="data">{loggedInUser?.website}</span>
          </div>
        </div>
        {/* Lower Div */}
        <div className="company-details">
          <div className="profile-item light text-center">Company</div>
          <div className="profile-item">
            <span className="label">Name</span>
            <span className="data">{loggedInUser?.company.name}</span>
          </div>
          <div className="profile-item">
            <span className="label">catchphrase</span>
            <span className="data">{loggedInUser?.company.catchPhrase}</span>
          </div>
          <div className="profile-item">
            <span className="label">bs</span>
            <span className="data">{loggedInUser?.company.bs}</span>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="profile-right">
        {/* Upper Div */}
        <div className="address-details">
          <div className="light">Address :</div>
          <div className="profile-item">
            <span className="label">Street</span>
            <span className="data">{loggedInUser?.address.street}</span>
          </div>
          <div className="profile-item">
            <span className="label">Suite</span>
            <span className="data">{loggedInUser?.address.suite}</span>
          </div>
          <div className="profile-item">
            <span className="label">City</span>
            <span className="data">{loggedInUser?.address.city}</span>
          </div>
          <div className="profile-item">
            <span className="label">Zipcode</span>
            <span className="data">{loggedInUser?.address.zipcode}</span>
          </div>
        </div>
        {/* Lower Div */}
        <div className="map-details">
          <img className="map-img" src={Map} alt="google map" />
          <div className="map-info">
            <span className="light">Lat:</span>
            <span className="lat-label"> {loggedInUser?.address.geo.lat}</span>
            <span className="light">Long:</span> {loggedInUser?.address.geo.lng}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
