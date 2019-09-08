import React from 'react';
import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconDiv = styled.div`
    width: ${props => props.width || '15px'};
    position: absolute;
    top: 50%;
    color: ${props => props.color};
    left: ${props => props.left};
    right: ${props => props.right};
    transform: translateY(-50%);
`;

const Icon = ({src, ...props}) => {

  return (
    <IconDiv left={props.left} right={props.right} color={props.color}>
      <FontAwesomeIcon icon={props.icon} />
    </IconDiv>
  );
}

export default Icon;