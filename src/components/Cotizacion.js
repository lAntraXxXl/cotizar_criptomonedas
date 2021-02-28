import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    p{
        color: #888;
    }
`;
const ContResult = styled.div`
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.02);
    padding: 10px 40px;
    .resumenHeader{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            div{
                display: flex;
                flex-direction: column;
            }
            img{
                width: 70px;
                height: 70px;
                margin-right: 10px;
            }
            span{
                display: block;
                width: 20px;
                height: 10px;
                margin: 5px auto;
                &:after{
                    content: '';
                    border-right: 10px solid transparent;
                    border-top: 10px solid #395EA5;
                    border-left: 10px solid transparent;
                    border-bottom: 0 solid transparent;
                    position: absolute
                }
            }
            p{
                margin: 0;
                text-align: center;
                font-weight: bolder;
            }
        }
    }
`;
const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`;

const Cotizacion = ({resultado,criptomoneda, moneda}) => {
    if(Object.keys(resultado).length === 0) return null;
    let urlAp = 'https://www.cryptocompare.com';
    return ( 
        <ResultadoDiv>
            <Header 
                titulo="Información de Cotización"
                descripcion=''
                fechas=''
            />
            <ContResult>
                <div className="resumenHeader">
                    <p>Resumen</p>
                    <div>
                        <img src={urlAp + resultado.IMAGEURL} alt={criptomoneda} />
                        <div>
                            <p>{criptomoneda}</p>
                            <span></span>
                            <p>{moneda}</p>
                        </div>
                    </div>
                </div>
                <Precio>El precio es: <span>{resultado.PRICE}</span> </Precio>
                <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span> </Info>
                <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span> </Info>
                <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
                <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span> </Info>
            </ContResult>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;