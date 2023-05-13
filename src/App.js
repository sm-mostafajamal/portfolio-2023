import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { projects } from "./data";
import Contact from "./pages/Contact";

function App() {
  const dark = true;

  return (
    <div>
      <Home dark={dark} />
      <AboutMe dark={dark} />
      <Projects data={projects} dark={dark} />
      <Contact dark={dark} />
    </div>
  );
}

export default App;
