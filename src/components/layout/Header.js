import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/layout/Header.css'

const admin = sessionStorage.getItem('id') === 1;
const usuario = sessionStorage.getItem('usuario');

const cerrarSesion = () => {
  console.log('crrear');
  sessionStorage.clear();
  window.location.href="/login"
};

const Header = () => {
  return (
    <header className='d-flex justify-content-between'>
      <div className='d-flex align-items-center ms-3'>
        <img src='/images/logo.png' width="50" alt='Recetas' />
        <h1 className='m-0'>Recetas</h1>
        
        {admin && (
          <h6 className='m-0 ms-1 rol'>admin</h6>
        )}
      </div>
      
      {usuario && (
        <div className='d-flex align-items-center me-4'>
          <a className="btn btn-primary" onClick={cerrarSesion}>
            Cerrar sesión <i className="bi bi-box-arrow-right"></i>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;