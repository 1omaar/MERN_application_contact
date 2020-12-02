import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavbarHome from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Add from "./Components/Add/Add";
import Error from "./Pages/Error/Error";
import Resume from "./Pages/Resume/Resume";
import { useState } from "react";

function App() {
  
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <NavbarHome />
      <div className="ui category search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search ..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <i className="search icon"></i>
        </div>
         <div className="results"/>
      </div>
      <hr/>
      <Switch>
        <Route exact path="/" render={(props)=> <Home {...props} s={search}/>} />
        <Route path={["/add", "/edit/:id"]} render={(props)=> <Add {...props} s={search}/> }/>
        <Route path="/resume" component={Resume} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
