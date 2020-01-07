import React from 'react';
import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
     <FilePond 
                allowMultiple={true}
                server="https://mock.alexsemich.repl.co/upload"
    />) 
}

function Upload() {
  return <h2>Upload located here</h2>;
}

export default App;
