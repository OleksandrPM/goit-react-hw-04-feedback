import PropTypes from 'prop-types';
import css from './Section.module.css';

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

function Section({ title, children }) {
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
