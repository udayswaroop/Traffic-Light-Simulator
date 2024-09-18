// YellowLight.js

const YellowLight = ({ isActive }) => (
  <div
    style={{
      width: '50px',
      height: '50px',
      backgroundColor: isActive ? 'yellow' : 'gray',
      boxShadow: isActive && '0px 0px 10px yellow',
      borderRadius: '50%',
      margin: '10px auto',
    }}
  >
  </div>
  
);

export default YellowLight;
