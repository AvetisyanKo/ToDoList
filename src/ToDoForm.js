import './ToDoForm.css';

function ToDoForm({ toDo,onDelete }) {
    return (
        <div className="toDo-border">
            <div className="toDo-text"><h3>{toDo.text}</h3></div>
            <input type="checkbox" className="toDo-mark"></input>
            <button className="Delete" onClick={()=>{
                onDelete(toDo);
            }}>Delete</button>
        </div>
    )
}

export default ToDoForm;
