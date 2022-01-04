import { useState } from 'react/cjs/react.development';
import ToDoHandle from './ToDoHandle';
import ToDoList from './ToDoList';

import './App.css';

function App() {
  const [toDos, setToDo] = useState([
    {
      id: 514,
      text: "sdmkcskmc",
      isCompleted: false
    },
    {
      id: 5,
      text: "sdmkcdfcdefskmc",
      isCompleted: false
    }
  ]);
  return (
    <div className="App">
      <ToDoHandle onSave={(text) => {
        setToDo(
          [
            ...toDos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            }
          ])
      }} />
      <ToDoList toDos={toDos}
        onDelete={(toDo) => {
          setToDo(toDos.filter((t) => t.id !== toDo.id))
        }} />
    </div>
  );
}

export default App;
