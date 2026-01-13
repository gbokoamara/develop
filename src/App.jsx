import './App.css'

import { Route, BrowserRouter as Router , Routes} from "react-router-dom";

import { Home } from './pages/Home'
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {

  return (
    <Router>
      <Header/>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer/>
  </Router>

  )

  
}

export default App
