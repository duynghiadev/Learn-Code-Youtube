import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

export const Panel = ({
  theme,
  title,
  iconName,
  path,
  listElements,
  heading = true,
  footer = true
}) => {
  return (
    <div className={`panel ${theme}`}>
      {heading && <p className="panel-heading">{title}</p>}

      {listElements.length === 0 && <div className="panel-block">Brak wpisów!</div>}

      {listElements.length > 0 &&
        listElements.map((el) => (
          <Link to={`/${path}/${el.id}`} className="panel-block" key={el.id}>
            <span className="panel-icon">
              <i className={`fas fa-${iconName}`} />
            </span>
            {el.name}
          </Link>
        ))}

      {footer && (
        <footer className="card-footer">
          <Link
            to={`/${path}`}
            className="button is-link is-outlined is-fullwidth"
            style={{ margin: '.8rem' }}>
            Zobacz więcej
          </Link>
        </footer>
      )}
    </div>
  );
};

Panel.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  listElements: PropTypes.array.isRequired,
  heading: PropTypes.bool,
  footer: PropTypes.bool
};
