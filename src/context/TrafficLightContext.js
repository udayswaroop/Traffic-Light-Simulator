import React, { createContext, useReducer, useContext } from 'react';

// Create the context
const TrafficLightContext = createContext();

// Action Types
const CHANGE_LIGHT = 'CHANGE_LIGHT';
const REQUEST_CROSSING = 'REQUEST_CROSSING';
const EMERGENCY_OVERRIDE = 'EMERGENCY_OVERRIDE';
const RESET_TIMER = 'RESET_TIMER';

// Initial state
const initialState = {
  currentLight: 'green',
  pedestrianRequested: false,
  emergencyOverride: false,
  timer: 10, // Initial timer for the green light
};

// Reducer function to handle state updates
const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LIGHT:
      if (state.currentLight === 'green') {
        return { ...state, currentLight: 'yellow', timer: 3 };
      } else if (state.currentLight === 'yellow') {
        return { ...state, currentLight: 'red', timer: state.pedestrianRequested ? 12 : 7 };
      } else {
        return { ...state, currentLight: 'green', timer: 10, pedestrianRequested: false };
      }
    case REQUEST_CROSSING:
      return { ...state, pedestrianRequested: true };
    case EMERGENCY_OVERRIDE:
      return { ...state, currentLight: 'red', timer: 7, emergencyOverride: true };
    case RESET_TIMER:
      return { ...state, timer: action.payload};
    default:
      return state;
  }
};

// Context Provider component
export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

// Custom hook to use the context in other components
export const useTrafficLight = () => useContext(TrafficLightContext);
