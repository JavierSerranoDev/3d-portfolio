import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import Blogger from '../sections/Blogger.jsx';
import BlogListSection from '../sections/BlogListSection.jsx';
import supabase from '../js/supabase-client.js';

const BlogPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data, error } = await supabase.from("projects").select("*");
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