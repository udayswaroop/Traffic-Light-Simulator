import React from 'react';
import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLight from './components/TrafficLight';
import './App.css'

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="App">
        <TrafficLight />
      </div>
    </TrafficLightProvider>
  );
};

export default App;
