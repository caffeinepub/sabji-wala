import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  useEffect(() => {
    document.title = 'Sabji wala';
  }, []);

  return <LandingPage />;
}

export default App;
