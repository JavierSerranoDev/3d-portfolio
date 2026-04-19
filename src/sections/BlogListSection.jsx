import { Link } from 'react-router-dom';
import PostGlowCard from '../components/PostGlowCard.jsx'
import TitleHeader from '../components/TitleHeader.jsx'

const BlogListSection = ({ posts }) => {
  return (
    <section id="projects" className="flex-center">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="Posts I've made" sub="✍🏻 Showcase of stuff to learn from"/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16 items-start">
                {posts.map(({ id, title, media, teaser}, index) => (
                    <Link to={`/post/${id}`} key={index}>
                        <PostGlowCard card={{ title, media, teaser }}/>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default BlogListSection