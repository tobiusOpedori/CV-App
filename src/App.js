import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create"
import CvList from "./CvList";
import MyCV from "./MyCV";
import About from "./About";
import NotFound from "./404page";


function App() {
  return (
    <Router>
        <div className="App">  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/CvList" element={<CvList />} />
            <Route path="/cv/:id" element={<MyCV />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
