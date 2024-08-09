import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

import BootstrapNavBar from "./BootstrapNavBar";
const Header = () => {
  return (
    <>
      <div className="header">
       
        <BootstrapNavBar />
      </div>
    </>
  );
};

export default Header;
