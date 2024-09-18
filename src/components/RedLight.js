// GreenLight.js

const RedLight = ({ isActive }) => (
  <div
    style={{
      width: '50px',
      height: '50px',
      backgroundColor: isActive ? 'red' : 'gray',
      boxShadow: isActive && '0px 0px 10px red',
      borderRadius: '50%',
      margin: '10px auto',
    }}
  ></div>
);

export default RedLight;


