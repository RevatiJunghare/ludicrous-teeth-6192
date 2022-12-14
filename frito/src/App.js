
import './App.css';
import AllRoutes from './Components/AllRoutes';
import WithSubnavigation from './Components/Navbar';
import Navbar from "./Components/Navbar"
import CaptionCarousel from "./Components/Pages/Carosel"

function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      <CaptionCarousel/>
      <AllRoutes/>
    </div>
  );
}

export default App;
