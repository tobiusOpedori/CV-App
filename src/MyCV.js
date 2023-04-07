import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MyCV = () => {
    const {id} = useParams();
    const [cv, setCv] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
       fetch('http://localhost:4000/cv/' + id)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCv(data);
        })
    },[]);

    const handleClick = () => {
        fetch("http://localhost:4000/cv/" + cv.id, {
          method: "DELETE",
        }).then(() => {
          navigate("/CvList");
        });
    }

    return (
        <div className="MYCV">
        {cv&&<h1 id="H1">{cv.name}'s CV</h1>}
            <div className="cv-info">
              {cv&& <label>Name: <span>{cv.name}</span></label>} 
              {cv&& <label>Address: <span>{cv.address}</span></label>} 
              {cv&& <label>Email: <span>{cv.email}</span></label>} 
              {cv&& <label>Mobile: <span>{cv.mobile}</span></label>} 
              {cv&& <label>Date of Birth: <span>{cv.dob}</span></label>}
              <label style={{marginTop:'30px'}}>Objective:</label>
              <hr />
              {cv&& <p>{cv.objective}</p>}
              <label>Skills and Abilities:</label>
              <hr />
              {cv&& <p>{cv.skills}</p>}
              <label>Education:</label>
              <hr />
              {cv&& <p>{cv.education}</p>}
              <hr />
              <button id="BTN" onClick={handleClick}>Delete CV</button> 
              <Link to=""><button id="sendbtn">Send CV</button></Link>
            </div>
            <>
            <Link to="/CvList"><button id="backbtn">Go Back</button></Link> 
            </>
        </div>
    );
}
 
export default MyCV;