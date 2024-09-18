import React, { useEffect } from 'react';
import { useTrafficLight } from '../context/TrafficLightContext';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';
import RedLight from './RedLight';
import PedestrianButton from './PedestrianButton';
import EmergencyOverrideButton from './EmergencyOverrideButton';
import ResetTimerButton  from './ResetTimerButton';

const TrafficLight = () => {
  const { state, dispatch } = useTrafficLight();

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "RESET_TIMER", payload: state.timer - 1 });
      if (state.timer <= 0) {
        dispatch({ type: "CHANGE_LIGHT" });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.timer, state.emergencyOverride, dispatch]);

  const handlePedestrianRequest = () => {
    dispatch({ type: "REQUEST_CROSSING" });
  };

  const handleEmergencyOverride = () => {
    dispatch({ type: "EMERGENCY_OVERRIDE" });
  };

  const handleResetTimer = () => {
    dispatch({ type: "RESET_TIMER", payload: 10 });
  };

  return (
    <div style={{backgroundColor: 'white',margin: '30px', border:`0px solid ${state.currentLight}`, padding: '50px', borderRadius: '20px', boxShadow: `0px 0px 20px ${state.currentLight}`}}>
      <h1>Traffic Light Simulator</h1>
      <div style={{ width: '60px', margin: '15px auto', backgroundColor: 'black', padding: '20px', borderRadius: '40px' }}>
        <GreenLight isActive={state.currentLight === 'green'} />
        <YellowLight isActive={state.currentLight === 'yellow'} />
        <RedLight isActive={state.currentLight === 'red'} />
      </div>
      <div style={{margin: '15px auto'}}>Time remaining: {state.timer}s</div>
      <PedestrianButton onClick={handlePedestrianRequest} />
      <EmergencyOverrideButton onClick={handleEmergencyOverride} />
      <ResetTimerButton onClick={handleResetTimer} />
    </div>
  );
};

export default TrafficLight;
