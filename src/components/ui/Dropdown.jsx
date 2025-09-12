import { useState } from 'react';
import Link from 'next/link';

const Dropdown = ({ title, options, buttonStyles, menuStyles, itemStyles, fn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)} // Open on hover
      onMouseLeave={() => setIsOpen(false)} // Close on hover leave
    >
      <button className={buttonStyles}>
        {title}
      </button>

      {/* Only render the menu items when `isOpen` is true */}
      {isOpen && (
        <div className={`${menuStyles} absolute mt-2 bg-white shadow-lg rounded`}>
          {options.map((option, index) => (
            <div key={index} className="w-full">
              <Link
                href={option.path}
                className={`${itemStyles} block px-4 py-2`}
                onClick={() => {
                  fn(); // Call the function when an option is selected
                  setIsOpen(false); // Close the dropdown on selection
                }}
              >
                {option.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
