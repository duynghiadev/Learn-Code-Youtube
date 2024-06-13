// các bước để xóa
// Thứ 1: Nút xóa nằm ở trong component ListItem là con ToDoList
// Thứ 2: Khi xóa thì chúng ta phải cập nhật lại state của ToDoList
// Thứ 3: Khi Todolist cập nhật lại state -> Component Todolist -> re-render
// Thứ 4 Khi cha Todolist re-render -> các con re-render (ListItem(todoList))
// --> công việc là truyền id thằng xóa lên thằng cha để cha biết được xóa thằng nào
// và cập nhật lại state của thằng cha


// công việc update là click button update, tiến hành đưa value update đến input
// 1. truyền id update từ con lên cha

function ListItem({todoItem, deleteData, showValueUpdate, flagUpdate, changeUpdateFlag}) {
    console.log('ListItem', flagUpdate);
    function handleDelete(id) {
        deleteData(id);
    }

    function handleUpdate(id) {
        changeUpdateFlag(!flagUpdate);
        showValueUpdate(id);
    }

    return (
        <li>
            {todoItem.name}
            <span 
                onClick={() => handleUpdate(todoItem.id)}
                className="update">Update</span>

            <span 
                onClick={() => handleDelete(todoItem.id)}
                className="close">×</span>
        </li>
    )
}

export default ListItem;