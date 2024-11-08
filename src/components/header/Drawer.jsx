import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <MenuRoundedIcon />{' '}
      </Button>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div w-[40vw] bg-backgroundClr h-screen p-4 md:p-6">
          <Link to="/">
            <p className="link text-base mb-2 sm:text-lg font-semibold text-gray-500 cursor-pointer hover:text-textClr transition duration-300">
              Home
            </p>
          </Link>

          <Link to="/watchlist">
            <p className="link text-base mb-2 sm:text-lg font-semibold text-gray-500 cursor-pointer hover:text-textClr transition duration-300">
              Watchlist
            </p>
          </Link>
          <Link to="/dashboard">
            <p className="link text-base mb-2 sm:text-lg font-semibold text-gray-500 cursor-pointer hover:text-textClr transition duration-300">
              Dashboard
            </p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
