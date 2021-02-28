import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../Hooks/useMoneda';
import useCriptomoneda from '../Hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #395EA5;
    border: none;
    width: 60%;
    margin: 20px auto 0 auto;
    border-radius: 6px;
    color: #FFF;
    transition: background-color .3s ease;
    box-shadow: 2px 2px 20px 1px #395EA5;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    const [listacripto, guardarListacripto] = useState([]);

    const [error , guardarError] = useState(false);

    const monedas = [
        {imagen: 'https://image.flaticon.com/icons/svg/555/555526.svg', codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {imagen: 'https://image.flaticon.com/icons/svg/206/206600.svg', codigo: 'MXN', nombre: 'Peso Mexicano'},
        {imagen: 'https://image.flaticon.com/icons/svg/206/206593.svg', codigo: 'EUR', nombre: 'Euro'},
        {imagen: 'https://image.flaticon.com/icons/svg/555/555417.svg', codigo: 'GBP', nombre: 'Libra Esterlina'}
    ];

    const [moneda, SeleccionarMoneda] = useMoneda('Elige tu moneda','', monedas);
    const [criptomoneda, SeleccionarCripto] = useCriptomoneda('Elige tu criptomoneda','', listacripto);

    //pedir datos de api
    useEffect(()=> {
        const consultarAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarListacripto(resultado.data.Data);
        }
        consultarAPI();
    },[]);

    const cotizarMoneda = e =>{
        e.preventDefault();

        if(moneda === '' || criptomoneda === '' ){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='*Todos los campos son obligatorios.' /> : null}
            <SeleccionarMoneda />
            <SeleccionarCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;