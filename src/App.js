import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  // Definir state presupuesto, restante
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);

  // Cuando agregamos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    
    guardarGastos([
      ...gastos,
      gasto

    ]);
    
  }


  return (
    <div className="container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido">
        { mostrarpregunta 
            ? (
              <Pregunta 
                guardarPresupuesto={ guardarPresupuesto }
                guardarRestante={ guardarRestante }
                actualizarPregunta={ actualizarPregunta }
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    agregarNuevoGasto={ agregarNuevoGasto }
                  />
                </div>

                <div className="one-half column">
                  2
                </div>
              </div>
            )
        }
      </div>
    </div>
  );
}

export default App;
