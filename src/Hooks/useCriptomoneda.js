import React, {Fragment, useState} from 'react';
import './hooks.css';


const useCriptomoneda = (label, stateInicial, opciones) => {

    const [stateCripto, actualizarStateCripto] = useState(stateInicial);
    const [mostrar, guardarMostrar] = useState(false);
    let urlAp = 'https://www.cryptocompare.com';

    const seleccionrP = cls =>{
        actualizarStateCripto(cls);
        if(!mostrar){
            guardarMostrar(true);
            return;
        }
        guardarMostrar(false);
    }
  
    const SeleccionarCripto = () => (
        <Fragment>
            <ul className={!mostrar ? 'SelectData indexPosDOWN nonVisibleTag' : 'SelectData indexPosDOWN'}>
                <li
                    onClick={() => seleccionrP('')}
                    className={stateCripto === '' || mostrar ? 'uno' : 'nonActive'}
                >
                    <p className="sel">Seleccione la Criptomoneda</p>
                </li>
            
                <div className="ContenedorSelect">
                    {opciones.map(opcion => (
                        <li 
                            key={opcion.CoinInfo.Id}
                            onClick={() => seleccionrP(opcion.CoinInfo.Internal)}
                            className={stateCripto === opcion.CoinInfo.Internal || mostrar ? opcion.CoinInfo.Internal : 'nonActive'}
                        >
                            <img src={urlAp + opcion.CoinInfo.ImageUrl} alt="dart" />
                            <p>({opcion.CoinInfo.Internal}) {opcion.CoinInfo.FullName}</p>
                        </li>
                    ))}
                </div>
               
            </ul>
        </Fragment>
    );
    return [stateCripto, SeleccionarCripto , actualizarStateCripto];
}
 
export default useCriptomoneda;