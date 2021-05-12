import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
