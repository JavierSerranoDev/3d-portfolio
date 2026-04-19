import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import WorkHighlight from '../sections/WorkHighlight.jsx';
import ProjectsSection from '../sections/ProjectListSection.jsx';
import projects from '../constants/projectsIndex.js';

const WorkPage = () => {

  return (
    <>
      <NavBar/>
      <WorkHighlight topProjectsImgPaths={(projects.length > 0) ? [projects[0].media[0].absolute_url, projects[2].media[0].absolute_url, projects[3].media[0].absolute_url, projects[4].media[0].absolute_url] : []}/>
      <ProjectsSection projects={projects}/>
      <Footer/>
    </>
  )
}

export default WorkPage