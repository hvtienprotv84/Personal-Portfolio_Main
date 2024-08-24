import React, { useContext, useState } from 'react';
import { languageOptions } from '../languages';
import { LanguageContext } from './Language';
import 'flag-icons/css/flag-icons.min.css'; // Import flag-icons CSS
import '../globals.css';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  // set selected language by calling context method

  // const handleLanguageChange = e => userLanguageChange(e.target.value);

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (id) => {
    userLanguageChange(id);
    setIsOpen(false);
  };

  return (
    // <select
    //   onChange={handleLanguageChange}
    //   value={userLanguage}
    // >
    //   {Object.entries(languageOptions).map(([id, name]) => (
    //     <option key={id} value={id}>{name}</option>
    //   ))}
    // </select>
    


    <div className="custom-dropdown">
      <button 
        className="dropdown-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
      <span className={`fi fi-${languageOptions[userLanguage].flag}`}></span>
      <span id='name_flag_firt'>{languageOptions[userLanguage].name}</span>
      <span id='icon_dropdown'>▼</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {Object.entries(languageOptions).map(([id, { name, flag }]) => (
            <div
              key={id}
              className="dropdown-item"
              onClick={() => handleLanguageChange(id)}
            >
              <span id='flag' className={`fi fi-${flag}`}></span>
              <span id='name_flag'>{name}</span>
            </div>
          ))}
        </div>
      )}
      <select 
        className="hidden-select"
        value={userLanguage}
        onChange={(e) => userLanguageChange(e.target.value)}
        aria-hidden="true" // Hide from screen readers
      >
        {Object.entries(languageOptions).map(([id, { name }]) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
};