import Tarea from './Tarea';

const ListaTareas = ({ tareas, completarTarea, eliminarTarea }) => {
  return (
    <div className="contenedor-tareas">
      {tareas.map(tarea => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          alCompletar={completarTarea}
          alEliminar={eliminarTarea}
          estaCompletada={false}
        />
      ))}
    </div>
  );
};

export default ListaTareas;