import './App.css';
import Navbar from './Navbar/Navbar';
import Workouts from './Workouts/Workouts';
import CreateWorkout from './CreateWorkout/CreateWorkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    

    <div className="app">


      <BrowserRouter>

      <Navbar />

        <Routes>
          <Route path='/' element={<Workouts />} />
          <Route path='/createWorkout' element={<CreateWorkout />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
