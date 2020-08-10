import React, { useState, useRef } from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
  const typingTimeOutRef = useRef(null);
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=4ceb2f24";
  
  const search = async (e) => {
    if(e.key === 'Enter')
      axios.get(`${apiUrl}&s=${state.s}`).then(({ data }) => {
        let results = data.Search;
        console.log(data);
        setState(prevState => ({...prevState, results: results}));
      })

  }

  const handleInput = (e) => {
    const newValue = e.target.value;

        setState(prevState => ({...prevState, s: newValue }));
        // if(typingTimeOutRef.current) {
        //     clearTimeout(typingTimeOutRef.current);
        // }
        // typingTimeOutRef.current = setTimeout(  () => {
        //   search();
        //   console.log(state);
        // }, 1000);
  }

  const openPopup = id => {
    axios.get(`${apiUrl}&i=${id}`).then(({ data }) => {
      let result = data;
      console.log(result, id)
      setState(prevState => ({...prevState, selected: result}))
    })
  }

  const closePopup = id => {
      setState(prevState => ({...prevState, selected: {}}))
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput= {handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup}/> : false} 
      </main>
    </div>
  );
}

export default App;
