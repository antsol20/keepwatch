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
  })

  const apiauth = "Basic " + Constants.API_KEY;
  const headers = { 'Authorization': apiauth }

  const fetchWatches = async () => {
    const url = Constants.API
    const res = await fetch(url, { headers: headers })
    const data = await res.json()

    return data
  }



  const deleteWatch = async (url) => {

    var answer = window.confirm("Confirm delete?");

    if (answer) {
      const data = { 'mode': 'delete', 'url': url, 'desc': 'desc' }

      await fetch(Constants.API, { method: "POST", headers: headers, body: JSON.stringify(data) })
    }
  }

  const addWatch = async (watch) => {

    const data = { 'mode': 'create', 'url': watch.Site, 'desc': watch.Description }

    await fetch(Constants.API, { method: "POST", headers: headers, body: JSON.stringify(data) })

  }


  return (
    <div className="App">

      <HeaderComp />
      <Watchlist watches={watches} onDelete={deleteWatch} />
      <br></br>
      <Addwatch onAdd={addWatch} />

    </div>
  );
}

export default App;

