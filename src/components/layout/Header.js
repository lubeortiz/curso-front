import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/layout/Header.css'

const Header = () => {
  return (
    <header className='d-flex justify-content-between'>
      <div className='d-flex align-items-center ms-3'>
        <img src='/images/logo.png' width="50" alt='Recetas' />
        <h1 className='m-0'>Recetas</h1>
      </div>
    </header>
  );
};

export default Header;