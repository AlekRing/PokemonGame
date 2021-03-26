import { useLocation, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import MenuHeader from './components/menuHeader';
import Footer from './components/footer/footer';
import AboutPage from './routes/AboutPage';
import NotFound from './routes/NotFound';
import ContactPage from './routes/ContactPage';

import cn from 'classnames';
import './App.css';
import { FirebaseContext } from './context/firebaseContext';
import Firebase from './services/firebase';

const App = () => {
  const location = useLocation();
  const ongamePadding = location.pathname === '/' || location.pathname === '/game/board'

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!ongamePadding}/>
              <div className={'wrap'} id={cn({'isHomePage': ongamePadding})}>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/home" component={HomePage} />
                  <Route path="/game" component={GamePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route render={()=>(
                    <Redirect to="/404"/>
                  )} />
                </Switch>
              </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  )
}

export default App;
