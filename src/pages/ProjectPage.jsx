import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../js/supabase-client.js';
import NavBar from '../components/NavBar.jsx';
import ProjectHighlight from '../sections/ProjectHighlight.jsx';
import ExperienceSection from '../sections/ExperienceSection.jsx';
import Footer from '../sections/Footer.jsx';

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
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <NavBar/>
      <ProjectHighlight name={currentProject.name}  date={currentProject.publicationDate} description={currentProject.description} imgPath={currentProject.imgPath}/>
      <ExperienceSection/>
      <Footer/>
    </>
  )
}

export default ProjectPage