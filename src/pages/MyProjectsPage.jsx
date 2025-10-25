import { Link } from 'react-router-dom';

const MyProjectsPage = () => {

  const projects = [
    {id: 1, title:"Unity"},
    {id: 2, title:"React"},
    {id: 3, title:"Android"}
  ];

  return (
    <div>
      <h1>Project</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={`/project/${project.id}`}>
              <h2>{project.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyProjectsPage