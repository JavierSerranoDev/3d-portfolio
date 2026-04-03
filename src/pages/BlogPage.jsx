import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import Blogger from '../sections/Blogger.jsx';
import BlogListSection from '../sections/BlogListSection.jsx';

const BlogPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const { data, error } = await supabase.from("posts").select("*");
        if(error) {
            console.log("Error fetching: ", error);
        }else{
            setPosts(data);
        }
    }

    return (
       <>
            <NavBar/>
            <Blogger/>
            <BlogListSection posts={ posts }/>
            <Footer/>
       </>
    );
}

export default BlogPage;