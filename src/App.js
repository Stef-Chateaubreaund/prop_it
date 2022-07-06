import React from "react";
import './App.css';


import PersonCard from './components/person_card';



function App() {
  return (
    <div className="App">
      <PersonCard firstName = { "stef" } lastName = { "chateau" } age = {24} hairColor = { "black" }/>
      <PersonCard firstName = { "chris" } lastName = { "paul" } age = {21} hairColor = { "brown" }/>
      <PersonCard firstName = { "millard "} lastName = { "fillmore" } age = {50} hairColor = { "brown" }/>
      <PersonCard firstName = { "maria" } lastName = { "smith" } age = {62} hairColor = { "brown" }/>
      
    </div>
  );
}

export default App;
