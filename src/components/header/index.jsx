import React from 'react';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/button';
import TemporaryDrawer from './drawer';
import ThemeToggle from '../common/ThemeToggle';

function Header() {
  return (
    <div className="header flex justify-between items-center p-6 md:p-4 sticky top-0 bg-backgroundClr z-[1000]">
      <h1 className="text-xl text-textClr sm:text-2xl md:text-4xl font-semibold m-0">
        CryptoData
        <span className="text-blue-500 text-4xl md:text-6xl">.</span>
      </h1>

      <div className="links hidden md:flex items-center gap-4">
        <Link to="/">
          {/* text-xs md:text-sm lg:text-base
text-xs md:text-sm lg:text-base
text-xs md:text-sm lg:text-base */}
          <p className=" font-semibold text-greyClr cursor-pointer hover:text-textClr transition duration-300">
            Home
          </p>
        </Link>
        <Link to="/compare">
          <p className=" font-semibold text-greyClr cursor-pointer hover:text-textClr transition duration-300">
            Compare
          </p>
        </Link>
        <Link to="/watchlist">
          <p className=" font-semibold text-greyClr cursor-pointer hover:text-textClr transition duration-300">
            Watchlist
          </p>
        </Link>
        <Link to="/dashboard">
          {/* <Button variant="contained">Dashboard</Button> */}
          <Button text={'Dashboard'} />
        </Link>
        <ThemeToggle />
      </div>
      <div className="drawer-component block md:hidden">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
