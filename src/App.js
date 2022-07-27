import './App.css';
import Courses from './pages/Courses';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Courses />
    </div>
  );
}

export default App;
