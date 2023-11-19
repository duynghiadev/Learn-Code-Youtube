import ListItem from './ListItem';
import FormAdd from './FormAdd';
import data from './data';
import { useState } from 'react';

let idIndex = 3;

function TodoList() {

    idIndex++;

    const [todoList, setTodoList] = useState(data);
    // state management object is edditing
    const [itemEditting, setItemEditting] = useState('');
    //state management update
    const [flagUpdate, setFlagUpdate] = useState(true);


    const addDataInput = function(data) {
        const newData = [{id: idIndex, name: data}, ...todoList];
        setTodoList(newData);
    }   

    const deleteData = function(id){
        const newState = todoList.filter(function(todoItem){
            return todoItem.id !== id;
        });
        
        //reder again app
        setTodoList(newState);
    }

    const showValueUpdate = function(id){
        const newStateEditing = todoList.find(function(todoItem){
            return todoItem.id === id;
        });

        // setstate
        setItemEditting(newStateEditing);
    }

    const handleUpdateTodo = function(id, valueInput) {
        const indexUpdate = todoList.findIndex(function(todoItem){
            return todoItem.id === id;
        })
        const newStateUpdate = [...todoList];
        newStateUpdate[indexUpdate].name = valueInput;
       

        // render app
        setTodoList(newStateUpdate);
        setItemEditting('');
    }


    function renderList() {

        let itemList = todoList.map(function(todoItem) {
            return (
                <ListItem 
                    changeUpdateFlag={changeUpdateFlag}
                    flagUpdate={flagUpdate}
                    showValueUpdate={showValueUpdate}
                    deleteData={deleteData}
                    key={todoItem.id} todoItem={todoItem}/>
            );
        });

        return itemList;
    }

    const changeUpdateFlag = function(flag) {
        setFlagUpdate(flag);
    }

    

    return (
        <div className="container">

            {/* form add */}
            <FormAdd 
                flagUpdate={flagUpdate}
                handleUpdateTodo={handleUpdateTodo}
                itemEditting={itemEditting}
                addDataInput={addDataInput}/>

            <ul id="myUL">
                {renderList()}
            </ul>
        </div>
    );
}

export default TodoList;