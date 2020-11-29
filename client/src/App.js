import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavbarHome from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Add from "./Components/Add/Add";
import Error from "./Pages/Error/Error"
import Resume from "./Pages/Resume/Resume";
function App() {
  
  return (
    <div className="App">
      <NavbarHome />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/add", "/edit"]} component={Add} />
        <Route path="/resume" component={Resume}/>
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
