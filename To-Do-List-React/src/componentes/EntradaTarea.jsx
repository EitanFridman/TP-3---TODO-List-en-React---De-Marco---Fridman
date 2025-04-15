import { useState } from 'react';

const EntradaTarea = ({ mostrarEntrada, setMostrarEntrada, agregarTarea }) => {
  const [tituloTarea, setTituloTarea] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (tituloTarea.trim()) {
      agregarTarea(tituloTarea);
      setTituloTarea('');
    }
  };

  return (
    <>
      <button 
        className="boton-crear-tarea" 
        onClick={() => setMostrarEntrada(true)}
        style={{ display: mostrarEntrada ? 'none' : 'inline-block' }}
      >
        Agregar tarea
      </button>

      {mostrarEntrada && (
        <form onSubmit={manejarEnvio} className="nueva-tarea">
          <input
            type="text"
            id="titulo-nueva-tarea"
            value={tituloTarea}
            onChange={(e) => setTituloTarea(e.target.value)}
            autoFocus
          />
          <button type="submit" className="boton-subir-tarea">
            <img src="img/arrow-up.svg" alt="Agregar" className="img-subir-tarea" />
          </button>
        </form>
      )}
    </>
  );
};

export default EntradaTarea;