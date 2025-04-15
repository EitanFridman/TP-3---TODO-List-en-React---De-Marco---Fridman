const Tarea = ({ tarea, alCompletar, alEliminar, estaCompletada }) => {
  const calcularTiempo = () => {
    if (!estaCompletada) return null;
    const segundos = ((tarea.tiempoResolucion - tarea.tiempoCreacion) / 1000).toFixed(2);
    return ` - Tiempo: ${segundos} seg`;
  };

  return (
    <div className={`tarea ${estaCompletada ? 'tarea-resuelta' : ''}`}>
      {!estaCompletada && (
        <button 
          className="boton-checkout" 
          onClick={() => alCompletar(tarea.id)}
        />
      )}
      
      <p>
        {tarea.titulo} 
        <small>
          ({estaCompletada 
            ? tarea.tiempoResolucion.toLocaleString() 
            : tarea.tiempoCreacion.toLocaleString()})
        </small>
        {estaCompletada && calcularTiempo()}
      </p>
      
      {!estaCompletada && (
        <button 
          className="boton-eliminar" 
          onClick={() => alEliminar(tarea.id)}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Tarea;