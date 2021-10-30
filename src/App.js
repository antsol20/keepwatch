import './App.css';
import { useState, useEffect } from 'react';
import HeaderComp from './components/headcomp';
import Watchlist from './components/watchlist';
import Addwatch from './components/addwatch';

function App() {

  const [watches, setWatches] = useState([])

  useEffect(() => {
    const getWatches = async () => {

      const watchesFromServer = await fetchWatches()
      setWatches(watchesFromServer)
    }

    getWatches()
  }, [])


  const fetchWatches = async () => {
    const url = "https://cors-anywhere.herokuapp.com/https://keepwatch.page/api"
    const res = await fetch(url, { headers: { 'Authorization': 'Basic YnVsbDpidWxsMTIz' } })
    const data = await res.json()

    return data
  }

  return (
    <div className="App">

      <HeaderComp />
      <Watchlist watches={watches}/>
      <br></br>
      <Addwatch />



    </div>
  );
}

export default App;

