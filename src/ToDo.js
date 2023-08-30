const ToDo = (props) => {
  return (
    <div key={props.todo.id} className="item-todo">
      <div
        className={props.todo.complete ? "item-text strike" : "item-text"}
        onClick={() => props.toggleTask(props.todo.id)}
      >
        {props.todo.task}
      </div>
      <div
        className="item-delete"
        onClick={() => props.removeTask(props.todo.id)}
      >
        x
      </div>
    </div>
  );
};

export default ToDo;
