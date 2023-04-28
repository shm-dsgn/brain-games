import './App.css';
import Auth from './components/Auth/auth';
import Memory from './components/Memory/Memory';
import Scramble from './components/Scramble/Scramble';

function App() {
  return (
    <div className="App"> 
      <Auth/>
      <Memory/>
      <Scramble/>
    </div>
  );
}

export default App;
