import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { projects } from "./data";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects data={projects} />
    </div>
  );
}

export default App;
