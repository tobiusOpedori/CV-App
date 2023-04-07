import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">
            <nav className="nav">
                <h1>CV Application</h1>
                <div className="links">
                <Link to="">More</Link>
                <Link to="/About">About</Link>
            </div>
            </nav>

            <div className="home">
                <p>No CV yet? Create one</p>
                <Link to="/Create"><button>Create CV</button></Link>
                <hr />
                <p>Already have a CV?</p>
                <Link to="/CvList"><button>Check CV</button></Link>
                <hr />
                <footer>
                    <p>Copyright &copy; 2023</p>
                </footer>
            </div>
        </div>
       
    );
}
 
export default Home;