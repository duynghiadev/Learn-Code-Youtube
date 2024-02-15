function Todolist({todos,handleStatus,handleDelet}) {
    return (
      <div>
        {todos.map((e) => (
          <div className="todolistContainer">
            <div
              style={
                e.status
                  ? {
                      textDecorationLine: "line-through",
                      textDecorationColor: "grey",
                      color: "#67eb09",
                    }
                  : { textDecorationLine: "none" }
              }
            >
              {e.title}
            </div>
            <div style={{ width: "30%" }}>
              <button
                className="doneBtn material-icons"
                onClick={() => {
                  handleStatus(e.id);
                }}
              >
                {e.status === false ? "check" : "clear"}
              </button>
              <button
                className="deletBtn material-icons"
                onClick={() => handleDelet(e.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Todolist