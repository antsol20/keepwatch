import './App.css';
import { useState, useEffect } from 'react';
import HeaderComp from './components/headcomp';
import Watchlist from './components/watchlist';
import Addwatch from './components/addwatch';
import * as Constants from './constants';

function App() {

  const [watches, setWatches] = useState([])

  useEffect(() => {
    const getWatches = async () => {

      const watchesFromServer = await fetchWatches()
      setWatches(watchesFromServer)
    }

    getWatches()
  }, [])

  const apiauth = "Basic " + Constants.API_KEY;
  console.log(apiauth)

  const fetchWatches = async () => {
    const url = "https://cors-anywhere.herokuapp.com/https://keepwatch.page/api"
    const res = await fetch(url, { headers: { 'Authorization': apiauth } })
    const data = await res.json()

    return data
  }

  return (
    <div className="App">

      <HeaderComp />
      <Watchlist watches={watches} />
      <br></br>
      <Addwatch />



    </div>
  );
}

export default App;

