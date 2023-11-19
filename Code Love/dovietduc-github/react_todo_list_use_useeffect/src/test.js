function App() {

    // let app_variable = 'app_variable';

    TodoList(

        function(dataFromChild) {
            console.log(dataFromChild);
        }
        
    );

}

function TodoList(callback) {

    let childrentValue = "childrent value";
    // console.log(dataFromParent);
    callback(childrentValue);

}

App();

// truyền data từ cha cho con --> truyền tham số trong function
// truyền từ con lên cha

