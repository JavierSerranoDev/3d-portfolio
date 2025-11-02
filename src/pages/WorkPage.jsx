import { useEffect, useState } from 'react';
import supabase from '../js/supabase-client.js';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import WorkHighlight from '../sections/WorkHighlight.jsx';
import ProjectsSection from '../sections/ProjectsSection.jsx';

const WorkPage = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if(error) {
      console.log("Error fetching: ", error);
    }else{
      setProjects(data);
    }
  }

  return (
    <>
      <NavBar/>
      <WorkHighlight topProjectsImgPaths={["/images/project1.png", "/images/project2.png", "/images/project3.png"]}/>
      <ProjectsSection projects={projects}/>
      <Footer/>
    </>
  )
}

export default WorkPage