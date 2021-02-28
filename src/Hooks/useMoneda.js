import React, {Fragment, useState} from 'react';
import './hooks.css';


const useMoneda = (label, stateInicial, opciones) => {

    const [state, actualizarState] = useState(stateInicial);
    const [mostrar, guardarMostrar] = useState(false);

    const seleccionrP = cls =>{
        actualizarState(cls);
        if(!mostrar){
            guardarMostrar(true);
            return;
        }
        guardarMostrar(false);
    }

    const Seleccionar = () => (
        <Fragment>
            <ul className={!mostrar ? 'SelectData indexPosUP nonVisibleTag' : 'SelectData indexPosUP'}>
                <li
                    onClick={() => seleccionrP('')}
                    className={state === '' || mostrar ? 'uno' : 'nonActive'}
                >
                    <p className="sel">Seleccione la Moneda</p>
                </li>

                <div className="ContenedorSelect">
                    {opciones.map(opcion => (
                        <li 
                            key={opcion.codigo}
                            onClick={() => seleccionrP(opcion.codigo)}
                            className={state === opcion.codigo || mostrar ? opcion.codigo : 'nonActive'}
                        >
                            <img src={opcion.imagen} alt="dart" />
                            <p>({opcion.codigo}) {opcion.nombre}</p>
                        </li>
                    ))}
                </div>
            </ul> 
        </Fragment>
    );
    return [state, Seleccionar, actualizarState];
}
 
export default useMoneda;