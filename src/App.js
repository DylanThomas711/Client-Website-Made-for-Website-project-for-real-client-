import { Route, Switch } from "react-router-dom";
import {Landing, Services, About, Error } from "./pages";
import Navbar from "./components/Navbar";
import { pages } from "./utils/consts";
import React, { useState, useEffect } from 'react'

function App() {
  const [error, setIsError] = useState(false);

  const load = async () => {
    try{
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  }
  useEffect(() => {
    load();
  }, [])
  if(error){
    return(
      <>
      <Error load = {load}/>
      </>
    )
  } else{
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path = "/">
            <Landing />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
