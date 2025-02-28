import "./App.css";
import Navbar from "./navbar/navbar";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Contract from "./Contract/Contract";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Education></Education>
      <Skill></Skill>
      <Project></Project>
      <Contract></Contract>
    </div>
  );
}

export default App;
