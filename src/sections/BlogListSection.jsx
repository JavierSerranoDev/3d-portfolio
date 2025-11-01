import { Link } from 'react-router-dom';
import PostGlowCard from '../components/PostGlowCard.jsx'
import TitleHeader from '../components/TitleHeader.jsx'

const BlogListSection = ({ posts }) => {
  return (
    <section id="projects" className="flex-center">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="Posts I've made" sub="✍🏻 Showcase of stuff to learn from"/>
            <div className="columns-1 mt-16">
                {posts.map(({ id, imgPath, name, description}, index) => (
                    <Link to={`/post/${id}`} key={index}>
                        <PostGlowCard card={{ name, imgPath, description }}/>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default BlogListSection