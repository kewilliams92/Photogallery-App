import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const NavUnlisted = styled.ul`
  //     list-style: none;
  // `
  const user = true;

  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-solid fa-camera-retro"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              {" "}
              home{" "}
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              {" "}
              about{" "}
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/about" className="link">
              {" "}
              contact{" "}
            </Link>{" "}
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/about" className="link">
              {" "}
              post{" "}
            </Link>{" "}
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/about" className="link">
              {user && "logout"}
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="topImg"
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/11026039_10152708261211916_1225078112409358925_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=4BI31smVO38AX_SdlIl&_nc_ht=scontent-atl3-1.xx&oh=00_AfACNhynBUVgockrLtTjC7j7nKrsv3qX0-1q3cXTB4wOSw&oe=63CC3119"
            alt="profilePic"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                register
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default NavBar;
