import { useEffect, useState } from 'react';
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

  const getWorkhighlightImages = () => {
    if(projects.length > 0) {
          return [];
    } else {
      return null;
    }
  }

  return (
    <>
      <NavBar/>
      <WorkHighlight topProjectsImgPaths={(projects.length > 0) ? [projects[0].header.media[0].absolute_url, projects[1].header.media[0].absolute_url, projects[2].header.media[0].absolute_url] : []}/>
      <ProjectsSection projects={projects}/>
      <Footer/>
    </>
  )
}

export default WorkPage