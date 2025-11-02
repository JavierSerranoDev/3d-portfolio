import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../js/supabase-client.js';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

const PostPage = () => {

  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prevPostId, setPrevPostId] = useState(null);
  const [nextPostId, setNextPostId] = useState(null);


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
      fetchAdjacentPosts(data[0].id)
      setLoading(false);
    }
  }

  const fetchAdjacentPosts = async (id) => {
    const prev = await supabase.from("posts").select("id").lt("id", id).order("id", { ascending: false }).limit(1);
    const next = await supabase.from("posts").select("id").gt("id", id).order("id", { ascending: true }).limit(1);

    if (prev.data?.length) setPrevPostId(prev.data[0].id);
    if (next.data?.length) setNextPostId(next.data[0].id);
  };


  if (loading) return <p style={{ padding: "2rem" }}>Loading...</p>;
  if (!currentPost) return <p style={{ padding: "2rem" }}>Post not found.</p>;

  return (
    <>
      <NavBar />
        <div className="blog-wrapper padding-x-lg py-32">
          {/* Render HTML (sanitized) */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(currentPost.body),
            }}
          />
        </div>
        <div className="blog-nav-buttons flex justify-between mt-20 px-5 md:px-0">
          {prevPostId && (
            <Link to={`/post/${prevPostId}`} className="nav-btn">← Previous Post</Link>
          )}
          {nextPostId && (
            <Link to={`/post/${nextPostId}`} className="nav-btn">Next Post →</Link>
          )}
        </div>
      <Footer />
    </>
  );
}

export default PostPage;