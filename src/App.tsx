import  {useEffect} from 'react';
import './App.css';
import HomePage from './Views/pages/HomePage';
import LogService from './Service/LogService';
function App() {

  useEffect(() => {
    LogService.init()
  }, [])

 
  return (
    <HomePage/>
  );
}

export default App;
