import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MidSection from "./components/MidSection";
import Services from "./components/Services";
import Office from "./components/Office";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <MidSection />
      <Services />
      <Office />
      <Footer />
    </div>
  );
}

export default App;
