
import './App.css';
import AllRoutes from './Components/AllRoutes';
import WithSubnavigation from './Components/Navbar';
import Footer from "./Components/Footer"
import CaptionCarousel from "./Components/Pages/Carosel"

function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      {/* <CaptionCarousel/> */}
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
