export default function TaskList({tasks , updateTask, deleteTask}) {

  const toggleComplete = (index)=>{
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }
  return (
    <ul>
      {tasks.map((task, index)=> (
        <li key={index}>
          <div>
            <span>{task.text}
              <small>({task.priority} , {task.category})</small>
            </span>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  )
}
