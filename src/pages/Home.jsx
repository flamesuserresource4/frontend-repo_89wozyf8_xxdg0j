import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50 to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900">
                The Naija Student Athlete
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-prose">
                Showcasing the next generation of Nigerian student athletes — their achievements, highlights, competitions, and stories.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/competitions" className="inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-3 text-white font-semibold hover:bg-green-700 transition-colors">
                  Explore Competitions
                </Link>
                <Link to="/media" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-900 font-semibold hover:border-gray-400">
                  Watch Highlights
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-gradient-to-br from-green-600 to-black p-1">
                <div className="h-full w-full rounded-xl bg-white/5 grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-lg h-full" />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl px-4 py-3 border border-gray-200">
                <p className="text-sm font-semibold text-gray-900">Bold. Fast. Relentless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured grids */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card title="Spotlight Athletes" action="View Profiles" href="/profiles">
            Meet rising stars making waves across track, field, court, and pitch.
          </Card>
          <Card title="Latest Highlights" action="See Media" href="/media">
            Short reels and photo stories capturing the best moments.
          </Card>
          <Card title="Fresh News" action="Read News" href="/news">
            Announcements, rankings, transfers, scholarships and more.
          </Card>
        </div>
      </section>
    </div>
  )
}

function Card({ title, children, action, href }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700">{children}</p>
      <Link to={href} className="inline-flex mt-6 text-green-700 font-semibold hover:text-green-800">
        {action} →
      </Link>
    </div>
  )
}
