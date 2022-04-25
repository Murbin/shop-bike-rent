import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import Filter from './filter';

const DashBoard = ({ children, showNavbar, showFilter }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {showNavbar && <Navbar />}
      <div style={{ width: '100%' }}>
        {showFilter && <Filter />}
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
