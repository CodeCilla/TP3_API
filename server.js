const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };
  if (!newTask.title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
  try {
    const taskId = parseInt(req.params.id);

    // Vérifier que la tâche existe
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Supprimer la tâche
    tasks = tasks.filter((t) => t.id !== taskId);

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  task.title = req.body.title;
  task.completed = req.body.completed;
  res.status(200).json(task);
});
// ajout du patch
app.patch('/tasks/:id/completed', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.completed = req.body.completed;
  res.status(200).json(task);
});

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
