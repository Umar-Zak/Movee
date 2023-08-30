import  {useEffect} from 'react';
import './App.css';
import HomePage from './Views/pages/HomePage';
import * as Sentry from "@sentry/react"
function App() {

  useEffect(() => {
    Sentry.init({
      dsn: process.env["REACT_APP_SENTRY_URI"],
      integrations: [
        new Sentry.BrowserTracing({
          tracePropagationTargets: ["localhost"],
        }),
        // new Sentry.Replay(),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1, 
      replaysOnErrorSampleRate: 1.0,
    });
    
  }, [])

 
  return (
    <HomePage/>
  );
}

export default App;
