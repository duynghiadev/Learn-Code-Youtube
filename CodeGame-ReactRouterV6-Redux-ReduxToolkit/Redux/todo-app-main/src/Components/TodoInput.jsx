import {useState}from 'react'

function TodoInput({getTodo}) {

    const [text, setText] = useState("");
    return (
        <div className="todoInputContainer" >
            <input className="todoinput"type="text" placeholder="add todo..." onChange={(e)=>setText(e.target.value)} />
            <button className="addTodoBtn" onClick={() => {
                text.length !== 0 ?
                    getTodo(text) : alert("Invalid Todo....");
            }}>ADD</button>
            
            
        </div>
    )
}


export {TodoInput}