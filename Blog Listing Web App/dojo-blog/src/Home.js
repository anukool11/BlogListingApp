import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    // const [blogs, setBlogs] = useState(null
    //     //[
    //     // {title: 'Article 1 ', body: 'The body of Article 1', author: 'Ernest', id:1},
    //     // {title: 'Article 2 ', body: 'The body of Article 2', author: 'Dalio', id: 2},
    //     // {title: 'Article 3 ', body: 'The body of Article 3', author: 'Howard', id:3},
    //     // {title: 'Article 3 ', body: 'The body of Article 3', author: 'Dalio', id:4}
    //     //]
    // );

    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id!==id)
    //     setBlogs(newBlogs);
    // }

    // useEffect(()=>{
    //     console.log('use effect ran');//runs everytime a render happens (the state changes) Adding an empty dependency array makes it run only once
    // }, []);//dependencies(state objects, eg blogs) for which it should be rendered


    return (
        <div className="Home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author=='Dalio')} title="Dalio's Blogs" />}
        </div>
      );
}
 
export default Home;