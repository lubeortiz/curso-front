import React from 'react';

const isActive = (currentUrl, targetPath) => {
  if (targetPath === '/' && currentUrl === '/') {
    return 'activo';
  }
  return currentUrl.includes(targetPath) && targetPath !== '/' ? 'activo' : '';
};

const currentUrl = window.location.toString();


const Nav = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <a
              href="/inicio"
              className={isActive(currentUrl, 'inicio') || isActive(currentUrl, '/')}
            >
              Recetas
            </a>
          </li>
          <li>
            <a
              href="/mis-recetas"
              className={isActive(currentUrl, 'mis-recetas')}
            >
              Mis Recetas
            </a>
          </li>
          <li>
            <a
              href="/novedades"
              className={isActive(currentUrl, 'novedades')}
            >
              Novedades
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              className={isActive(currentUrl, 'contacto')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;