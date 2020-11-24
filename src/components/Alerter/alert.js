import React from 'react';
import PropTypes from 'prop-types';
import * as StyledComponents from './alert-styled';

const Alerter = ({ type, title }) => (
  <StyledComponents.AlertWrapper type={type}>
    <pre>Im clone called alerter </pre>
    {title}
  </StyledComponents.AlertWrapper>
);

Alerter.propTypes = {
  /**
    * Specify description for title
    */
  title: PropTypes.string,
  /**
   	* Specify description for type
   	*/
  type: PropTypes.oneOf(['info', 'warning', 'error']),
};

Alerter.defaultProps = {
  title: 'label',
  type: 'info',
};

export default Alerter;
