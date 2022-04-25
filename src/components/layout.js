import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import Container from 'react-bootstrap/Container';

const DashBoard = ({ children, showNavbar }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {showNavbar && <Navbar />}
      <Container>{children}</Container>
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
