import React from 'react';
import styled from '@emotion/styled'

const ContHeader =styled.div`
    margin-bottom: 40px;
    margin-top: 80px;
`;
const Heading = styled.h1`
    font-family: 'Questrial', sans-serif;
    color: #2A3C46;
    text-align: center;
    font-weight: bolder;
    font-size: 24px;
    margin-bottom: 30px;
    &:after{
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        background-color: rgba(0,0,0,0.2);
        margin-top: 30px;
    }
`;
const Parrafo = styled.p`
    font-family: 'Roboto', sans-serif;
    color: rgba(0,0,0,0.5);
    text-align: left;
    font-size: 13px;
    margin:0 ;
    padding: 0;
    line-height: 18px;
    span{
        color: rgba(0,0,0,0.8);
    }
`;

const Header = ({titulo, descripcion, fechas}) => {
    return (
        <ContHeader>
            <Heading>{titulo}</Heading> 
            <Parrafo>{descripcion} <span>{fechas}</span></Parrafo>
        </ContHeader>
     );
}
 
export default Header;