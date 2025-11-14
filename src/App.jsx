import Navbar from './Navbar'
import Home from './pages/Home'
import AthleteProfile from './pages/AthleteProfile'
import Competitions from './pages/Competitions'
import Media from './pages/Media'
import News from './pages/News'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<AthleteProfile />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/media" element={<Media />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <footer className="mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} The Naija Student Athlete</p>
          <p className="font-semibold text-green-700">Built for speed, focus and excellence.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
