import './App.css';
import HeaderComp from './components/headcomp';
import Watchlist from './components/watchlist';
import Addwatch from './components/addwatch';

function App() {
  return (
    <div className="App">
      
      <HeaderComp />
      <Watchlist />
      <br></br>
      <Addwatch />



    </div>
  );
}

export default App;

