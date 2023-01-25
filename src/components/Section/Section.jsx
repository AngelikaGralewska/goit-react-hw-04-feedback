
import PropTypes from 'prop-types';
import style from './Section.module.css';

const Section = ({ title, children }) => {
    return (
      <section>
        <h2 className={style.section}>{title}</h2>
        {children}
      </section>
    );
  };
  
  Section.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.element,
  };
  
  export default Section;