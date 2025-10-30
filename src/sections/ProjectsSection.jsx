import { Link } from 'react-router-dom';
import ProjectGlowCard from '../components/ProjectGlowCard.jsx';
import TitleHeader from '../components/TitleHeader.jsx';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="flex-center">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="Works I've made" sub="⭐ Showcase of cool stuff"/>
            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                {projects.map(({ id, imgPath, name, description}, index) => (
                    <Link to={`/project/${id}`} key={index}>
                        <ProjectGlowCard card={{ name, imgPath, description }}/>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection