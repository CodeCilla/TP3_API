# Task Management API with Express and Node.js

**Author:** Priscilla Mickael

A simple RESTful API for managing tasks, built with Express and Node.js.

---

## Getting Started

- **Start server:**
  ```
  npm run start
  ```
- **Development mode (with nodemon):**
  ```
  npm run dev
  ```

Server runs at: [http://localhost:3000](http://localhost:3000)

---

## Available Routes

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Get all tasks           |
| POST   | `/tasks`     | Create a new task       |
| PUT    | `/tasks/:id` | Update a task by ID     |
| DELETE | `/tasks/:id` | Delete a task by ID     |
| PATCH  | `/tasks/:id` | Change task in complete |

---

## Task Example

```json
{
  "id": 1,
  "title": "My first task",
  "completed": false
}
```

---

## Notes

- All routes use and return JSON.
- The `title` field is required when creating a task.
- The `completed` field is a boolean indicating if the task is done.
