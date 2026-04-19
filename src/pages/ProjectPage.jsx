import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ProjectHighlight from '../sections/ProjectHighlight.jsx';
import ProjectExperienceSection from '../sections/ProjectExperienceSection.jsx';
import Footer from '../sections/Footer.jsx';
import projects from '../constants/projectsIndex.js';

const ProjectPage = () => {

  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const project = projects.find((p) => p.id === parseInt(id));
    setCurrentProject(project || {});
  }, [id]);

  return (
    <>
      <NavBar/>
      <ProjectHighlight title={currentProject.title} date={currentProject.date} description={currentProject.description} media={currentProject.media} html={currentProject.html}/>
      <ProjectExperienceSection
        tools={currentProject?.tools ?? []}
      />
      <Footer/>
    </>
  )
}

export default ProjectPage