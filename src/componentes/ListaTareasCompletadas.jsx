import Tarea from './Tarea';

const ListaTareasCompletadas = ({ tareasCompletadas }) => {
  return (
    <div className="contenedor-tareas-resueltas">
      {tareasCompletadas.map(tarea => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          estaCompletada={true}
        />
      ))}
    </div>
  );
};

export default ListaTareasCompletadas;