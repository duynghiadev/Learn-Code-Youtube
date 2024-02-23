import React, { useState, useEffect } from "react";


const ToDoList = () => {

    const [list, setList] = useState([
        {
            id: 0,
            name: "Rzecz do zrobienia",
            done: false
        },
        {
            id: 1,
            name: "Kupić jajka",
            done: false
        }
    ]);
    const [name, setName] = useState('');
    

    const handleClickDone = (e) => {
        console.log(e.target.value);
        console.log(list);
        setList((list) => {
            let newList= [];
            list.map((el) => {
                console.log(el);
                if(e.target.value === el.id) {
                    el.done = !el.done;
                }
                newList.push(el);
            })
            console.log(newList);
            return newList;
        })
    }

    const handleClickButton = (e) => {
        e.preventDefault();
        const item = {
                        id: list.length,
                        name: name,
                        done: false
                    };
        
        setList((prev) => [...prev, item]);
        
    }

    const handleOther = (e) => {
        
        setName(e.target.value);
        console.log(name);
        
        
        
    }

    return (
        <div className="toDoList">
            <form className="header" onSubmit={handleClickButton}>
                <h2>Twoja lista zadań</h2>
                <input type="text" value={name} placeholder="np. Zrobić zakupy" onChange={handleOther} />
                <input type="submit" className="btn-add"/>
            </form>

            <ul>
                    {list.map(el => {
                        console.log(el);
                        return <li key={el.id} className={el.done?"done":"undone"}  value={el.id} onClick={handleClickDone}>{el.name} </li>
                    })}
            </ul>
        </div>
    )
}

export default ToDoList;
