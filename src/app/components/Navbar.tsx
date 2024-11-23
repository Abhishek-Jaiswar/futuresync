'use client';

import React, { useState } from 'react';
import Dropdown from './ui/Dropdown';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownEnter = (id: number) => {
    setOpenDropdown(id);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="flex items-center justify-between py-5 px-4">
      <div className="px-4 py-1.5 rounded-full bg-white flex items-center justify-center">
        <h1 className="font-semibold bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
          Future<span className="font-light">Sync</span>
        </h1>
      </div>

      <div className="hidden md:flex flex-1 ml-10 gap-5">
        {['Design', 'Code', 'Build', 'Deploy'].map((label, index) => (
          <Dropdown
            key={index}
            id={index}
            label={label}
            isOpen={openDropdown === index}
            onMouseEnter={() => handleDropdownEnter(index)}
            onMouseLeave={handleDropdownLeave}
          />
        ))}
      </div>

      <div className="relative">
        <label htmlFor="language" className="sr-only">
          Choose Language
        </label>
        <select
          id="language"
          name="language"
          className="appearance-none bg-white border border-neutral-300 rounded-full px-4 py-2 pr-8 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

