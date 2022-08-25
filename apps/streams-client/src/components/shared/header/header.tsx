import styles from './header.module.css';
import {Link} from "react-router-dom";
import React from "react";
import GoogleAuth from "../google-auth/google-auth";

/* eslint-disable-next-line */
export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={`${styles['container']} ui secondary pointing menu`}>
      <Link to="/" className="item">Streamer</Link>
      <div className="right menu">
        <Link to="/streams/show" className="item">All Streams</Link>
        <GoogleAuth />
      </div>
      {/*<div className="left menu">
        <Link to="/" className="item">Login</Link>
      </div>
*/}
    </div>
  );
}

export default Header;
