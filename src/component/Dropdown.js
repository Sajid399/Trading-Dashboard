import React, { useState } from 'react';
import '../App.css';
import imageUrl3 from '../images/Ellipse 1.png'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the dropdown is open
  // const [selectedOption, setSelectedOption] = useState('');

  // const handleDropdownChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   setIsOpen(false); // Close the dropdown when an option is selected
  // };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown open/close state when the icon is clicked
  };

  return (
    <div className=" ms-1">
      <div className="dropdown-icon" onClick={toggleDropdown} >
        <svg className='d-none d-md-block mt-2' xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M8.825 0L5 3.7085L1.175 0L0 1.1417L5 6L10 1.1417L8.825 0Z" fill="#1C1C1C" />
        </svg>
      </div>
      <ul className='notifications' style={{ display: isOpen ? 'block' : 'none' }}>
            <li>Veiw Profile</li>
            <li>Setting</li>
            <li>Logout</li>
           </ul>
      </div>
    
  );
}

export default Dropdown;
