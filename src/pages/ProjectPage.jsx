import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../constants/index.js';
import supabase from '../js/supabase-client.js';

const ProjectPage = () => {

  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState([]);

  /*const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    // EXAMPLE OF FETCHING API
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then((response) => response.json())
    .then((data) => setTodos(data))
    .catch((error) => console.error("Error fetching todos:", error));
  }, []);*/

  useEffect(() => {
    fetchProject(id);
  }, [id]);

  const fetchProject = async () => {
    const { data, error } = await supabase.from("projects").select().eq('id', `${id}`);
    if(error) {
      console.log("Error fetching: ", error);
    }else{
      setCurrentProject(data[0]);
    }
  }

  return (
    <div>
      <h1>Project {currentProject.id}</h1>
      <p>{currentProject.name}</p>
      <p>{currentProject.mentions}</p>
      <p>{currentProject.review}</p>
      <p>{currentProject.publicationDate}</p>
      <img src={currentProject.imgPath} alt={currentProject.name}/>
    </div>
  )
}

export default ProjectPage