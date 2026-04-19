import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ProjectHighlight from '../sections/ProjectHighlight.jsx';
import Footer from '../sections/Footer.jsx';
import posts from '../constants/blogIndex.js';

const PostPage = () => {

  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const post = posts.find((p) => p.id === parseInt(id));
    setCurrentPost(post || {});
  }, [id]);

  return (
    <>
      <NavBar/>
      <ProjectHighlight title={currentPost.title} date={currentPost.date} description={currentPost.description} media={currentPost.media} html={currentPost.html}/>
      <Footer/>
    </>
  )
}

export default PostPage