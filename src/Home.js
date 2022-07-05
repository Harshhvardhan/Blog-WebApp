// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {


    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">


            {error && <div>{error}</div>}
            {isPending && <div> Loading Blogs...</div>}

            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Muskan')} title="Muskan's Blog!" />}
            {/* blog is an argument used to take datafrom blogs named object */}

        </div>
    );
}

export default Home;






// const [name, setName] = useState('Harsh');
// const [age, setAge] = useState(20);
// const handleClick = () => {
//     setName('Muskan');
//     setAge(19);
// const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', author: 'Harsh', id: 1 },
//     { title: 'Fcae recog', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', author: 'Muskan', id: 2 },
//     { title: 'Blog webapp', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', author: 'Harsh', id: 3 },
// ]);




// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }


// /* <h2>Home page</h2>
//             <p>{name} is {age} years old.</p>
//             <button onClick={handleClick}>clickk</button> */}
// {/* {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p> Written by {blog.author}</p> 
//                 </div>
//             ))} */
