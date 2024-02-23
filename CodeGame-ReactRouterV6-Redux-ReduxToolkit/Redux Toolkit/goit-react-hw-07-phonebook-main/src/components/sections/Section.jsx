import PropTypes from 'prop-types';

import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
