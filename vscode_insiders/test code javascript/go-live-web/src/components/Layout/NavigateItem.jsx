import React from 'react';
import clsx from 'classnames';
import { NavLink } from 'react-router-dom';

function NavigateItem(props) {
  const { link, icon, label } = props;

  return (
    <div className='navigate-item'>
      <NavLink
        to={link}
        className={({ isActive }) => {
          return clsx('wrapper', { active: isActive });
        }}
      >
        <div className='icon'>{icon}</div>
        <div className='label'>{label}</div>
      </NavLink>
    </div>
  );
}

export default NavigateItem;
