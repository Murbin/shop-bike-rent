import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const DashBoard = ({ children, showNavbar, showFilter, addBackground }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Navbar />
      <div
        style={{ width: '100%', background: addBackground ? '#6085FC' : null }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

DashBoard.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
  showNavbar: PropTypes.bool,
  showPrimaryFooter: PropTypes.bool,
  showSecondaryFooter: PropTypes.bool
};

DashBoard.defaultProps = {
  showHeader: false,
  showNavbar: false,
  showPrimaryFooter: false,
  showSecondaryFooter: false
};

export default DashBoard;
