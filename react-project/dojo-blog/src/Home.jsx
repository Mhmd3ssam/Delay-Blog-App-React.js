import {useState , useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    
    const [blogs, setBlogs ] = useState([
        {title:'My new website', body:'lorem ipsum', author:'Mohamed', id:1},
        {title:'welcome party', body:'lorem ipsum', author:'Ali', id:2},
        {title:'web de top ips', body:'lorem ipsum', author:'Mohamed', id:3},
    ]);

    const [name, setName] = useState('Mohamed');

    const handelDelete =(id) =>{
        const newBlogs = blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log('hi ya brans ')
        console.log(name);
    },[name]);
    return (  
        <div className="home">
          <BlogList blogs={blogs} title="All Blogs" handelDelete={handelDelete}/>
          <button onClick={()=> setName('Ali')}>Change Name</button>
          <p>{name}</p>
        </div>
    );
}
 
export default Home;