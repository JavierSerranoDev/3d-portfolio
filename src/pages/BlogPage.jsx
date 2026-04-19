import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../sections/Footer.jsx';
import Blogger from '../sections/Blogger.jsx';
import BlogListSection from '../sections/BlogListSection.jsx';
import posts from '../constants/blogIndex.js'

const BlogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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