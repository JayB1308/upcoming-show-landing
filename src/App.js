import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import UpcomingShows from './components/UpcomingShows/UpcomingShows';
import Review from './components/Reviews/Review';
function App() {
  return (
    <>
    <div className="hero-banner">
    <Navbar />
    <Hero />
    </div>
    <UpcomingShows />
    <Review />
    </>
  );
}

export default App;
