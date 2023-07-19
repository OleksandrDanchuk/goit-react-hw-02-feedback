import PropTypes from 'prop-types';
import css from './Section.module.css';
export const Section = ({ children, titel }) => (
  <section className={css.titel}>
    <h2 className={css.titel}>{titel}</h2>
    {children}
  </section>
);

Section.propTypes = {
  titel: PropTypes.string.isRequired,
};
