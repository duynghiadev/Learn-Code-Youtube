import {useEffect, useState} from 'react';


function FormAdd({addDataInput, itemEditting, handleUpdateTodo, valueInput, updateInputValue}) {
   
    
    function handleChange(event) {
        updateInputValue(event.target.value);
    }

    function handleAdd() {
        // truyền data từ con lên cha
        addDataInput(valueInput);
        // reset input
        updateInputValue('');
    }

    function handleUpdate(id) {
        handleUpdateTodo(id, valueInput);
        updateInputValue('');

    }


    function renderButton() {
        if(itemEditting) {
            return (
                <span className="addBtn" onClick={() => handleUpdate(itemEditting.id)}>
                    Update
                </span>
            )
        } else {
            return (
                <span className="addBtn" onClick={handleAdd}>
                    Add
                </span>
            );
        }
    }
    
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input
                onChange={handleChange}
                value={valueInput}
                type="text"
                id="myInput"
                placeholder="Title..."
            />
           
            { renderButton() }
        </div>
    )
}

export default FormAdd;