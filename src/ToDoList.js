import ToDoForm from "./ToDoForm";

function ToDoList({ toDos, onDelete }) {
    return (
        <div>
            {
                toDos.map((toDo) => <ToDoForm key={toDo.id} toDo={toDo} onDelete={onDelete} />)
            }
        </div>
    )
}

export default ToDoList;