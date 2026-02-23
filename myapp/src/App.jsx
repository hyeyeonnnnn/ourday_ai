import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Letter from './pages/Letter'

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/letter" element={<Letter />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App