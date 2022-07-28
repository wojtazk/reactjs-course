import { Route, Switch } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import QuoteDetails from './components/pages/QuoteDetails';

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>

      <Route path="/quotes/:quoteId">
        <QuoteDetails />
      </Route>

      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;