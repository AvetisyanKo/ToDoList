import { useState } from "react";
import './ToDoHandle.css';

function ToDoHandle({ onSave }) {
    const [text, setText] = useState("");
    return (
        <form className="ToDoHandle"
            onSubmit={(e) => {
                e.preventDefault();
                onSave(text);
                setText("");
            }}
        >
            <h1 className="ToDoHandle-toDoList">ToDoList</h1>
            <div className="ToDoHandle-border">
                <input
                    className="ToDoHandle-writeBorder"
                    type="text"
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                ></input>
                <button className="ToDoHandle-save"><h1>Save</h1></button>
            </div>
        </form>
    )
}

export default ToDoHandle;