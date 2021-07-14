import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Views/Home';
import Articles from './Views/Articles';
import Page404 from './Views/Page404';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/articles">
                        <Articles />
                    </Route>
                    
                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
