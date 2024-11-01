import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <MenuRoundedIcon />{' '}
      </Button>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div w-[40vw] bg-backgroundClr h-screen p-4 md:p-6">
          <a href="/">
            <p className="link text-base mb-2 sm:text-lg font-semibold text-gray-500 cursor-pointer hover:text-textClr transition duration-300">
              Home
            </p>
          </a>
          <a href="/compare">
            <p className="link text-base mb-2 sm:text-lg font-semibold text-gray-500 cursor-pointer hover:text-textClr transition duration-300">
              Compare
            </p>
          </a>
          <a href="/watchlist">
            <p className="link text-base mb-2 sm:text-lg font-semibold text-gray-500 cursor-pointer hover:text-textClr transition duration-300">
              Watchlist
            </p>
          </a>
          <a href="/dashboard">
            <p className="link text-base mb-2 sm:text-lg font-semibold text-gray-500 cursor-pointer hover:text-textClr transition duration-300">
              Dashboard
            </p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
