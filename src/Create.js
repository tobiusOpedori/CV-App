import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dob, setDob] = useState("");
    const [objective, setObjective] = useState("");
    const [skills, setSkills] = useState("");
    const [education, setEducation] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const cv = {name,address,email,mobile,dob,objective,skills,education};

        setName('')
        setAddress('')
        setEmail('')
        setMobile('')
        setDob('')
        setObjective('')
        setSkills('')
        setEducation('')

        fetch("http://localhost:4000/cv", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cv)
          }).then(() => {
            console.log("new cv added");
            navigate("/CvList");
          });
    }

    return (
        <>
        <h1 id="h1">CREATE NEW CV</h1>
        <div className="cv">
            <form onSubmit={handleSubmit}>
               <label>Name:</label>
               <input type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/><br />
               <label>Address:</label>
               <input type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)}/><br />
               <label>Email:</label>
               <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/><br />
               <label>Mobile:</label>
               <input type="text" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)}/><br />
               <label>Date of Birth:</label>
               <input type="text" 
                value={dob} 
                onChange={(e) => setDob(e.target.value)}/><br />          

               <label style={{marginTop:"30px"}}>Objective:</label>
               <hr />
               <textarea 
               value={objective} 
               onChange={(e) => setObjective(e.target.value)}></textarea>

               <label>Skills and Abilities:</label>
               <hr />
               <textarea
               value={skills} 
               onChange={(e) => setSkills(e.target.value)}></textarea>

               <label>Education:</label>
               <hr />
               <textarea
               value={education} 
               onChange={(e) => setEducation(e.target.value)}></textarea>

               <input type="submit" value='submit cv' id="btn" />
               <Link to="/"><button>Go Back</button></Link>
            </form>
        </div>
        </>
    );
}
 
export default Create;