import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../mockData/data";

const ResponsiveMenu = ({ open, setOpen, onMenuClick }) => {
  const handleClick = (item) => {
    onMenuClick(item);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#193F7D]/80 text-white p-6 rounded-3xl shadow-lg"
          >
            <ul className="flex flex-col items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item)}
                    className="text-xl font-semibold uppercase py-2 px-4 hover:bg-blue-400 rounded-lg transition"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
