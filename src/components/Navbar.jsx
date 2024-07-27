import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex w-full items-center bg-gray-800 p-4 fixed">
      <div className="grow space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white">
          {t('welcome')}
        </Link>
        <Link to="/about" className="text-gray-300 hover:text-white">
          {t('about')}
        </Link>
        <Link to="/projects" className="text-gray-300 hover:text-white">
          {t('projects')}
        </Link>
        <Link to="/contact" className="text-gray-300 hover:text-white">
          {t('contact')}
        </Link>
      </div>
      <div className="flex justify-end items-center space-x-1">
        <button onClick={() => changeLanguage('en')} className="text-white">EN</button>
        <div className="h-4 border-l border-white"></div>
        <button onClick={() => changeLanguage('es')} className="text-white">ES</button>
      </div>
    </nav>
  );
}

export default Navbar;
