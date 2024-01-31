function App() {

    // let app_variable = 'app_variable';

    TodoList(

        function(dataFromChild) {
        }
        
    );

}

function TodoList(callback) {

    let childrentValue = "childrent value";
    callback(childrentValue);

}

App();

// truyền data từ cha cho con --> truyền tham số trong function
// truyền từ con lên cha

