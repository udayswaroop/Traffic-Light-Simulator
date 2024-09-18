// GreenLight.js

const GreenLight = ({ isActive }) => (
  <div
    style={{
      width: '50px',
      height: '50px',
      backgroundColor: isActive ? 'green' : 'gray',
      boxShadow: isActive && '0px 0px 14px green',
      borderRadius: '50%',
      margin: '10px auto',
    }}
  ></div>
);

export default GreenLight;

