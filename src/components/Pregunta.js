import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = () => {

  // State para cantidad del presupuesto
  const [ cantidad, guardarCantidad ] = useState( 0 );
  const [ error, guardarError ] = useState( false );

  // Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad( parseInt( e.target.value, 10 ) );
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar
    if ( cantidad < 1 || isNaN( cantidad )) {
      guardarError( true );
      return;
    }
    // Luego de Validar
    guardarError( false ); 


  }

  return (
    <Fragment>
        <h2>Coloca tu Presupuesto</h2>
        { error 
          ? <Error 
              mensaje="El Presupuesto es Incorrecto"
            />
          : null
        }
        <form
          onSubmit={ agregarPresupuesto }
        >
            <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={ definirPresupuesto }
            />
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
        </form>
    </Fragment>
  );
}

export default Pregunta;
