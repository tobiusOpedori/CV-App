import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CvList = () => {
    const [cv, setCv] = useState(null);    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:4000/cv')
        .then(res => {
            if (!res.ok) {
                throw Error("could not fetch data for that resource");
              }
            return res.json();
        })
        .then(data => {
            setCv(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {      
              setIsLoading(false);
              setError(err.message);           
          })
      }, 250);
    },[]);

    return (
        <div className="cv-list">
            <h1>All CV's</h1>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {cv&& cv.map((cv) => (
                <div className="cv-name" key={cv.id}>
                    <Link to={`/cv/${cv.id}`}>
                    <h2>{cv.name}</h2>
                    <h3>CV: {cv.id}</h3>
                    </Link>                   
                </div>
            ))}
            <>
                <Link to="/"><button>Go Home</button></Link>
            </>
        </div>    
    );
}
 
export default CvList;