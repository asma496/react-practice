import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';




function Main() {
    return (
        <div>
            <h1>MY WEB PAGE</h1>

            <Router>
<nav>
    <ul>
   <li> <Link to='/'>HOME</Link></li>
   <li> <Link to='/about'>About</Link></li>
   <li> <Link to='/contact'>Contact</Link></li>

    </ul>
</nav>
<Switch>
    <Route path='/Contact'><Contact /></Route>
    <Route path='/About'><About /></Route>
    <Route path='/'><Home /></Route>

</Switch>

            </Router>
            
        </div>
    )
}

export default Main
