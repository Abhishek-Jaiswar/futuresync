'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface DropdownProps {
  id: number;
  label: string;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ id, label, isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <motion.div
        className="px-4 py-1.5 rounded-full bg-white/60 cursor-pointer text-base flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <p className="text-[.8rem] font-semibold text-neutral-700 flex items-center gap-2">
          {label} <BiChevronDown className={`text-lg font-bold text-neutral-900 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 left-0 z-10"
          >
            <ul className="flex w-[8.5rem] py-4 px-2 items-center justify-center bg-white rounded-2xl flex-col gap-3 shadow-lg">
              {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, index) => (
                <motion.li
                  key={index}
                  className="text-sm font-medium text-neutral-800 hover:text-blue-500 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;

