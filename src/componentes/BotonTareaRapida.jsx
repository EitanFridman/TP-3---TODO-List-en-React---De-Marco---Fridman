const BotonTareaRapida = ({ tareasCompletadas }) => {
  const encontrarTareaMasRapida = () => {
    if (tareasCompletadas.length === 0) {
      alert("No hay tareas resueltas aún.");
      return;
    }

    const masRapida = tareasCompletadas.reduce((anterior, actual) => {
      const tiempoAnterior = anterior.tiempoResolucion - anterior.tiempoCreacion;
      const tiempoActual = actual.tiempoResolucion - actual.tiempoCreacion;
      return tiempoAnterior < tiempoActual ? anterior : actual;
    });

    const segundos = ((masRapida.tiempoResolucion - masRapida.tiempoCreacion) / 1000).toFixed(2);
    alert(`La tarea más rápida fue "${masRapida.titulo}" con un tiempo de ${segundos} segundos.`);
  };

  return (
    <button 
      className="boton-mas-rapida" 
      onClick={encontrarTareaMasRapida}
    >
      Averiguar tarea resuelta más rápida
    </button>
  );
};

export default BotonTareaRapida;