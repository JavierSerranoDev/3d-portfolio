import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../js/supabase-client.js';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import WorkHighlight from '../sections/WorkHighlight.jsx';

const WorkPage = () => {

  const [projects, setProjects] = useState([]);

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
      <WorkHighlight/>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={`/project/${project.id}`}>
              <h2>{project.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    <Footer/>
    </>
  )
}

export default WorkPage