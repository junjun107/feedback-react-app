import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import About from './pages/About';
import FeedbackList from './components/FeedbackList';
import RatingAvg from './components/RatingAvg';
import FeedbackForm from './components/FeedbackForm';
import AboutPageLinkIcon from './components/AboutPageLinkIcon';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <RatingAvg />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutPageLinkIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
