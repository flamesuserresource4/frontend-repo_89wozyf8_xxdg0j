import { Link, NavLink } from 'react-router-dom'
import { Menu, Trophy, Newspaper, Image as ImageIcon, Users } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'px-3 py-2 rounded-md text-sm font-semibold transition-colors'

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-green-600 flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="font-black tracking-tight text-lg sm:text-xl text-gray-900">The Naija Student Athlete</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`}>Home</NavLink>
            <NavLink to="/competitions" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`}>
              <span className="inline-flex items-center gap-2"><Trophy className="h-4 w-4"/> Competitions</span>
            </NavLink>
            <NavLink to="/media" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`}>
              <span className="inline-flex items-center gap-2"><ImageIcon className="h-4 w-4"/> Media</span>
            </NavLink>
            <NavLink to="/news" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`}>
              <span className="inline-flex items-center gap-2"><Newspaper className="h-4 w-4"/> News</span>
            </NavLink>
          </nav>

          <button aria-label="Open Menu" className="md:hidden p-2 rounded-md border border-gray-200" onClick={() => setOpen(v => !v)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/competitions" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`} onClick={() => setOpen(false)}>Competitions</NavLink>
            <NavLink to="/media" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`} onClick={() => setOpen(false)}>Media</NavLink>
            <NavLink to="/news" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-green-600' : 'text-gray-900 hover:text-green-700 hover:bg-green-50'}`} onClick={() => setOpen(false)}>News</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
