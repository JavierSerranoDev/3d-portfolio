import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../js/supabase-client.js';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';

const PostPage = () => {

  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase.from("posts").select().eq('id', `${id}`);
    if(error) {
      console.log("Error fetching: ", error);
    }else{
      setCurrentPost(data[0]);
    }
  }

  if (loading) return <p style={{ padding: "2rem" }}>Loading...</p>;
  if (!currentPost) return <p style={{ padding: "2rem" }}>Post not found.</p>;

  return (
    <>
      <NavBar />
      {/* Render HTML (sanitized) */}
        <div className="blog-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(currentPost.body),
          }}
        />
      <Footer />
    </>
  );
}

export default PostPage;