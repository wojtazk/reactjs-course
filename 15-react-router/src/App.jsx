import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const Layout = React.lazy(() => import('./components/layout/Layout'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <React.Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />

          <Route path="/quotes" element={<AllQuotes />} />

          <Route path="/quotes/:quoteId/*" element={<QuoteDetails />} />

          <Route path="/new-quote" element={<NewQuote />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Layout>
  );
}

export default App;
