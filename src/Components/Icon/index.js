import React from 'react';
import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconDiv = styled.div`
    position: absolute;
    top: 50%;
    color: ${props => props.theme.text};
    transform: translateY(-50%);
`;

const Icon = ({icon, ...props}) => {

  return (
    <IconDiv {...props}>
      <FontAwesomeIcon icon={icon} />
    </IconDiv>
  );
}

export default Icon;