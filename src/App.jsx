import { useState } from 'react'

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = (event) => {
    event.preventDefault()

    const trimmedTask = task.trim()
    if (!trimmedTask) {
      return
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        text: trimmedTask,
      },
    ])
    setTask('')
  }

  const removeTask = (indexToRemove) => {
    setTasks((currentTasks) =>
      currentTasks.filter((_, taskIndex) => taskIndex !== indexToRemove),
    )
  }

  return (
    <main className="todo-app">
      <h1>To-Do App</h1>
      <form className="todo-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map((item, index) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button type="button" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
