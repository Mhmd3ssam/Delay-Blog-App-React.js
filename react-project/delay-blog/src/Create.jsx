import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ali');
    const history = useHistory();

    const handelSubmit = (e) => {
        e.preventDefault();
        const blog = { title,body, author};

        fetch('http://localhost:3000/blogs', {
            method: 'Post',
            headers:{"Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            history.push('/');

        })


    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handelSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Bloge author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="ali">ali</option>
                    <option value="mohamed">mohamed</option>
                </select>
                <button>Add Blog </button>
                
            </form>
        </div>
     );
}
 
export default Create;