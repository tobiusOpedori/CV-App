import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
        <div className="about">
            <h3>CV Application Version 1.0.0</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quos debitis libero minus. Voluptatibus, similique nostrum! 
            Dolorum consectetur eius in perspiciatis similique quaerat
            Quos debitis libero minus. Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. Commodi, hic.
            facere, nulla repellat, doloribus,</p> 
            <p>Lorem ipsam est cupiditate eligendi praesentium quia
            reiciendis aut natus vel deserunt atque?
            Reiciendis natus facilis a? Eaque provident necessitatibus 
            magni beatae porro? Incidunt.</p>
            <Link to='/' style={{textDecoration:'none'}}>Go to homepage</Link>
        </div>
        </>
    );
}
 
export default About;