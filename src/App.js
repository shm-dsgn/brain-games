import './App.css';
import Auth from './components/Auth/auth';
import Memory from './components/Memory/Memory';
import Response from './components/Response/Response';
import Scramble from './components/Scramble/Scramble';

function App() {
  return (
    <div className="App"> 
      <Auth/>
      <Memory/>
      <Scramble/>
      <Response/>
    </div>
  );
}

export default App;
