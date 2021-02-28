import React, {useState, useEffect } from 'react';
import Formularios from './components/Formularios';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
import Header from './components/Header';
import styled from '@emotion/styled'
import axios from 'axios';

const Contenedor = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat( 2, 1fr);
    column-gap: 2rem;
  }
  .contForm{
    padding: 0 20px;
  }
`;

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {

    const cotizarCriptomoneda = async() => {
      if(moneda === '') return;

      const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      guardarCargando(true);
      //console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
      setTimeout( () => {
        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
        console.log(criptomoneda);
        console.log(moneda);
      },3000);
    }
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  const componente = (cargando) ? <Spinner />: <Cotizacion resultado={resultado} criptomoneda={criptomoneda} moneda={moneda} />
  const dateProj = new Date();
  const dateString = `${dateProj.getFullYear()}.${dateProj.getMonth()+1}.${dateProj.getDate()}`
  return (
    <Contenedor>
      <div className="contForm">
        <Header 
          titulo="Cotizador de Criptomonedas"
          descripcion='Basado en el tipo de cambio de Cryptocompare a la fecha de hoy'
          fechas={dateString}
        />
        <Formularios 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      </div>
      <div>
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
