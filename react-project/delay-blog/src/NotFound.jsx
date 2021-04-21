import { Link } from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That Page cannot be found
             <Link to="/">Back to homepage...</Link>   
            </p>
        </div>
     );
}
 
export default NotFound;