import { useState } from 'react';
import EntradaTarea from './componentes/EntradaTarea';
import ListaTareas from './componentes/ListaTareas';
import ListaTareasCompletadas from './componentes/ListaTareasCompletadas';
import BotonTareaRapida from './componentes/BotonTareaRapida';
import './styles.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareasCompletadas, setTareasCompletadas] = useState([]);
  const [mostrarEntrada, setMostrarEntrada] = useState(false);

  const agregarTarea = (titulo) => {
    const nuevaTarea = {
      id: Date.now(),
      titulo: titulo,
      tiempoCreacion: new Date(),
      tiempoResolucion: null
    };
    setTareas([...tareas, nuevaTarea]);
    setMostrarEntrada(false);
  };

  const completarTarea = (id) => {
    const tareaACompletar = tareas.find(tarea => tarea.id === id);
    const tareaActualizada = {
      ...tareaACompletar,
      tiempoResolucion: new Date()
    };
    
    setTareas(tareas.filter(tarea => tarea.id !== id));
    setTareasCompletadas([...tareasCompletadas, tareaActualizada]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="aplicacion">
      <EntradaTarea 
        mostrarEntrada={mostrarEntrada} 
        setMostrarEntrada={setMostrarEntrada} 
        agregarTarea={agregarTarea} 
      />
      
      <BotonTareaRapida tareasCompletadas={tareasCompletadas} />
      
      <ListaTareas 
        tareas={tareas} 
        completarTarea={completarTarea} 
        eliminarTarea={eliminarTarea} 
      />
      
      <ListaTareasCompletadas tareasCompletadas={tareasCompletadas} />
    </div>
  );
}

export default App;