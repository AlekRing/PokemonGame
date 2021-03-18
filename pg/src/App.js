import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import MenuHeader from './components/menuHeader';
import Footer from './components/footer/footer';
import AboutPage from './routes/AboutPage';
import NotFound from './routes/NotFound';
import ContactPage from './routes/ContactPage';

import cn from 'classnames';
import './App.css';

const App = () => {
  const match = useRouteMatch('/');

  return (
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>
              <div className={'wrap'} id={cn({'isHomePage': match.isExact})}>
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
  )
}

export default App;
