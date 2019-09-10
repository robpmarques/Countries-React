import React from 'react';
import styled from  'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconDiv = styled.div`
    width: ${props => props.width || '15px'};
    position: absolute;
    top: 50%;
    color: ${props => props.theme.text};
    left: ${props => props.search ? '20px' : ''};
    left: ${props=> props.arrow ? '25px' : ''};
    right: ${props => props.moon ? '88px' : ''};
    transform: translateY(-50%);
`;

const Icon = ({src, ...props}) => {

  return (
    <IconDiv search={props.search} moon={props.moon} arrow={props.arrow}>
      <FontAwesomeIcon icon={props.icon} />
    </IconDiv>
  );
}

export default Icon;