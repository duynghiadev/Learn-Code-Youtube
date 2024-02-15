import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

const styledActiveLink = ({ isActive }) => ({
  color: isActive ? 'rgb(243 190 77)' : 'inherit'
});

const styledActiveLinkAppBar = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : 'normal'
});

export const Layout = () => {
  const styles = {
    main: {
      marginTop: '3rem'
    }
  };

  return (
    <>
      <nav className="navbar has-shadow is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <h2 className="navbar-item title is-4">TwojePrzepisy.pl</h2>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="/recipes" end className="navbar-item" style={styledActiveLinkAppBar}>
                <span className="icon has-text-primary">
                  <i className="fas fa-folder" />
                </span>
                <span>Przepisy</span>
              </NavLink>
              <NavLink to="/products" end className="navbar-item" style={styledActiveLinkAppBar}>
                <span className="icon has-text-danger">
                  <i className="fas fa-pizza-slice" />
                </span>
                <span>Produkty</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="container" style={styles.main}>
        <div className="columns">
          <div className="column is-one-fifth">
            <aside className="menu" style={{ marginRight: '4rem', marginTop: '1rem' }}>
              <p className="menu-label">Podstrony</p>
              <ul className="menu-list">
                <li>
                  <NavLink to={'/'} style={styledActiveLink}>
                    Strona główna
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/recipes'} end style={styledActiveLink}>
                    Przepisy
                  </NavLink>
                </li>
                <li>
                  <NavLink end to={'/products'} style={styledActiveLink}>
                    Produkty
                  </NavLink>
                </li>
              </ul>
              <p className="menu-label">Akcje</p>
              <ul className="menu-list">
                <li>
                  <NavLink to={'/recipes/add'} end style={styledActiveLink}>
                    Dodaj Przepis
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/products/add'} style={styledActiveLink}>
                    Dodaj Produkt
                  </NavLink>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column is-four-fifths">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};
