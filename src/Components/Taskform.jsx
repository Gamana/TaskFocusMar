import { useState } from "react"

export default function Taskform({addTask}) {
    const[task, setTask] = useState('');
    const [priority, setPriority] = useState('medium');
    const [category, setCategory] = useState('general');

    const handlesubmit = (e) => {
        e.preventDefault(); //refresh
        addTask({text: task, priority, category, completed: false});

        //reset
        setTask('');
        setPriority('medium');
        setCategory('general');
    }

    return(
        <form onSubmit={handlesubmit}>
            <div>
                <input type="text" placeholder="Enter the task" 
                value={task}
                onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
                <h1>{task} {priority} {category}</h1>
            </div>

            <div>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">low</option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}