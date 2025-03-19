
import WeatherApp from "./WeatherApp";

function App() {

  const appStyle = {
    height: '100vh',   // Full viewport height
    width: '100vw',    // Full viewport width
    display: 'flex',   // Flexbox for layout
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center',     // Center content vertically
    backgroundColor:'red'
    
  };

  return (
    <div>
      <WeatherApp /> 
    </div>
  );
}

export default App
