import './App.css';
import Navbar from './Navbar/Navbar';
import Workouts from './Workouts/Workouts';

function App() {
  return (
    <div className="app">
      {/* Side-Navbar */}

      <Navbar />

      {/* Main Area */}


      <Workouts />
    </div>
  );
}

export default App;
