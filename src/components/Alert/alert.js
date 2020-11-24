import React from 'react';
import PropTypes from 'prop-types';
import * as StyledComponents from './alert-styled';

const Alert = ({ type, title }) => (
  <StyledComponents.AlertWrapper type={type}>
    {title}
  </StyledComponents.AlertWrapper>
);

Alert.propTypes = {
  /**
    * Specify description for title
    */
  title: PropTypes.string,
  /**
   	* Specify description for type
   	*/
  type: PropTypes.oneOf(['info', 'warning', 'error']),
};

Alert.defaultProps = {
  title: 'label',
  type: 'info',
};

export default Alert;
