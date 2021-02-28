import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    color: #ff0000a1;
    font-size: 14px;
    font-weight: bolder;
    text-align: center;
    font-family: 'Questrial', sans-serif;
    &::after {
        content: '';
        width: 70%;
        height: 1px;
        background-color: #ff0000a1;
        display:block;
        margin: 0 auto;
    }
`;


const Error = ({mensaje}) => {
    return ( 
        <MensajeError>
            {mensaje}
        </MensajeError>
     );
}
 
export default Error;