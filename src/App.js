import "./App.css";
import DropdownMenu from "./components/nav/dropdownMenu/DropdownMenu";
import Contact from "./containers/contact/Contact";
import Education from "./containers/education/Education";
import PortfolioProjects from "./containers/portfolioProjects/PortfolioProjects";
import Home from "./containers/home/Home";
import WorkHistory from "./containers/workHistory/WorkHistory";
import About from "./containers/about/About";
import Skills from "./containers/skills/Skills";

function App() {
  return (
    <div className="App">
      <DropdownMenu />
      <Home />
      <About />
      <Skills />
      <PortfolioProjects />
      <Education />
      <WorkHistory />
      <Contact />
    </div>
  );
}

export default App;
