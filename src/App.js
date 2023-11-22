import './App.css';
import Navbar from "./components/Navbar";
import { HeroSection } from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import Statistics from "./components/Statistics";
import SecurityUpdate from "./components/SecurityUpdate";
function App() {
  return (
    <div >
        <Navbar />
        <Header />
        <HeroSection />
        <Statistics />
        <SecurityUpdate />
        <Footer />

    </div>
  );
}

export default App;
