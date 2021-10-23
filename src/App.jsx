
import { MovieDetails } from "./pages/MovieDatails";
import { LandingPage } from "./pages/LandingPage";

import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";

 export function App(){
    return (
    <Router>
        <header>
            <Link to="/">{ <h1 className={styles.title}>Movies</h1>}</Link>
        </header>
        <main>
        <Switch>
          <Route exact path="/movies/:movieId"><MovieDetails/></Route>
          <Route exact path="/"><LandingPage/></Route>
          <Route path="/"><PageNotFound/></Route>
        </Switch>
        </main>
    </Router>
    );
    
}