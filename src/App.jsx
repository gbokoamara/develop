import './App.css'

import { Route, BrowserRouter as Router , Routes} from "react-router-dom";

import { Home } from './pages/Home'
// import { Header } from './components/layout/header';
// import { Footer } from './components/layout/footer';
import { SelectionSites } from './pages/SelectionSites';
import { Telechargement } from './pages/Telechargement';
import { FormulaireIdee } from './pages/FormulaireIdee';
import { ProjectDetail } from './pages/ProjectDetail';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {

  return (
    <Router>
      <Header/>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection" element={<SelectionSites />} />
        <Route path="/marquette" element={<Telechargement />} />
        <Route path="/idée" element={<FormulaireIdee />} />
        <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
      </Routes>
      </main>
      <Footer/>
  </Router>

  )

  
}

export default App
