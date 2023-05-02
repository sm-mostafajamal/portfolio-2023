import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { projects } from "./data";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects data={projects} />
      <Contact />
    </div>
  );
}

export default App;
