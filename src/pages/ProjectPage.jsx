import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../constants/index.js';

const ProjectPage = () => {

  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    /* EXAMPLE OF FETCHING API
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then((response) => response.json())
    .then((data) => setTodos(data))
    .catch((error) => console.error("Error fetching todos:", error));*/
    const result = fetchProjects(id);
    setTodos(result);
  }, [id]);

  return (
    <div>
      <h1>Project {id}</h1>
      <p>Project {todos.name}</p>
    </div>
  )
}

export default ProjectPage