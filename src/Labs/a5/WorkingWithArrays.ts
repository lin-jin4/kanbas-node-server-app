// import React, { useState, useEffect, ChangeEvent } from "react";
// import axios from "axios";

// // Define the type for the todo item
// interface Todo {
//   id: number;
//   title: string;
//   description: string;
//   due: string;
//   completed: boolean;
// }

// function WorkingWithArrays() {
//   const [errorMessage, setErrorMessage] = useState(null);
//   const API = "http://localhost:4000/a5/todos";
//   const [todo, setTodo] = useState<Todo>({
//     id: 1,
//     title: "NodeJS Assignment",
//     description: "Create a NodeJS server with ExpressJS",
//     due: "2021-09-09",
//     completed: false,
//   });
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const fetchTodos = async () => {
//     const response = await axios.get<Todo[]>(API);
//     setTodos(response.data);
//   };

//   const removeTodo = async (todo: Todo) => {
//     const response = await axios.get<Todo[]>(`${API}/${todo.id}/delete`);
//     setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
//   };
  
//   const createTodo = async () => {
//     const response = await axios.get(`${API}/create`);
//     setTodos(response.data);
//   };

//   const fetchTodoById = async (id: number) => {
//     const response = await axios.get<Todo>(`${API}/${id}`);
//     setTodo(response.data);
//   };
  
//   const updateTitle = async () => {
//     const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
//     setTodos(response.data);
//   };


//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const newId = parseInt(e.target.value, 10);
//     setTodo({ ...todo, id: newId });
//   };

//   const postTodo = async () => {
//     const response = await axios.post(API, todo);
//     setTodos([...todos, response.data]);
//   };

//   const deleteTodo = async (todo: Todo) => {
//     try {
//       const response = await axios.delete(`${API}/${todo.id}`);
//       setTodos(todos.filter((t) => t.id !== todo.id));
//     } catch (error: any) {
//       console.error("Error deleting todo:", error);
//       setErrorMessage(error.response?.data?.message || "Error deleting todo");
//     }
//   };
  
//   const updateTodo = async () => {
//     try {
//       const response = await axios.put(`${API}/${todo.id}`, todo);
//       setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
//     } catch (error: any) {
//       console.error("Error updating todo:", error);
//       setErrorMessage(error.response?.data?.message || "Error updating todo");
//     }
//   };

//   return (
//     <div>
//       <h2>Working with Arrays</h2><br/>
//       {errorMessage && (
//         <div className="alert alert-danger mb-2 mt-2">
//           {errorMessage}
//         </div>
//       )}
//       <button onClick={updateTodo}>
//         Update Todo
//       </button><br/>
//       <button onClick={() => deleteTodo(todo)}
//     className="btn btn-danger float-end ms-2">
//     Delete
//   </button><br/>
//       <button onClick={createTodo} >
//         Create Todo
//       </button><br/>
//       <button onClick={updateTitle} >
//         Update Title
//       </button><br/>

//       <textarea value={todo.description}
//         onChange={(e) => setTodo({ ...todo,
//           description: e.target.value })} /><br/>
//       <input value={todo.due} type="date"
//         onChange={(e) => setTodo({
//           ...todo, due: e.target.value })} /><br/>
//       <label>
//         <input checked={todo.completed} type="checkbox"
//           onChange={(e) => setTodo({
//             ...todo, completed: e.target.checked })} />
//         Completed
//       </label><br/>
//       <button onClick={postTodo}> Post Todo </button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input checked={todo.completed}
//               type="checkbox" readOnly />
//             {todo.title}
//             <p>{todo.description}</p>
//             <p>{todo.due}</p>

//             <button onClick={() => fetchTodoById(todo.id)} >
//           Edit
//         </button>
//             <button onClick={() => removeTodo(todo)}>Remove</button>
//             {todo.title}
//           </li>
//         ))}
//       </ul>

//       <input
//         type="number"
//         value={todo.id}
//         onChange={(e) => handleIdChange(e)}
//       />
//       <br />

//       <input
//         type="text"
//         value={todo.title}
//         onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//       />
//       <h3>Updating an Item in an Array</h3>
//       <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`}>
//         Update Title to {todo.title}
//       </a>

//       <h3>Deleting from an Array</h3>
//       <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
//         Delete Todo with ID = {todo.id}
//       </a>

//       <h3>Creating new Items in an Array</h3>
//       <a className="btn btn-primary" href={`${API}/create`}>
//         Create Todo
//       </a> 

//       <h3>Filtering Array Items</h3>
//       <a className="btn btn-primary" href={`${API}?completed=true`}>
//         Get Completed Todos
//       </a>

//       <h4>Retrieving an Item from an Array by ID</h4>
//       <input value={todo.id} onChange={handleIdChange} />
//       <a href={`${API}/${todo.id}`}>
//         Get Todo by ID
//       </a>

//       <h4>Retrieving Arrays</h4>
//       <a className="btn btn-primary" href={API}>
//         Get Todos
//       </a>
//       <br />
//     </div>
//   );
// }

// export default WorkingWithArrays;
