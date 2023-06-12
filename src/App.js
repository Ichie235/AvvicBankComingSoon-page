import "./App.css";
import ComingSoon from "./page/comingSoon/comingSoon";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
