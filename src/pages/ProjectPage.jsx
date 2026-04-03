import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ProjectHighlight from '../sections/ProjectHighlight.jsx';
import ProjectExperienceSection from '../sections/ProjectExperienceSection.jsx';
import Footer from '../sections/Footer.jsx';

const ProjectPage = () => {

  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState({});

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
      <ProjectHighlight name={currentProject.name}  date={currentProject.publicationDate} description={currentProject.description} carousel={currentProject.carousel}/>
      <ProjectExperienceSection
  gradient={currentProject?.experience?.gradient ??
    `linear-gradient(0deg, rgba(69, 222, 196, 0) 0%, #62e0ff 25%, #52aeff 37.51%, #fd5c79 62.83%, #6d45ce 92.91%)`}
  experiences={currentProject?.experience?.experiences ?? []}
/>

      <Footer/>
    </>
  )
}

export default ProjectPage