import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

const Button = styled.p`
  background: ${({ theme }) => theme.togglebackground};
  color: ${({ theme }) => theme.text};
  font-size: 8px;
  position: fixed;
  z-index: 9999;
  padding: 6px;
  cursor: pointer;
  color : ${({theme}) => theme.toggleIcon};
  }`;
  
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          <FontAwesomeIcon icon={faLightbulb} /> Switch
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;