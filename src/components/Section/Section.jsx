import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <div className="section">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
