import { Trophy } from 'lucide-react'

export default function Competitions() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-gray-900">Competitions</h1>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm">
            <Trophy className="h-4 w-4 text-green-700" />
            <span className="font-semibold text-gray-900">Season 2025</span>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-600 to-black" />
              <div className="p-5">
                <h3 className="font-bold text-gray-900">Competition {i + 1}</h3>
                <p className="mt-1 text-sm text-gray-700">Lagos • Track & Field</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-700 bg-green-50 rounded-full px-2 py-1">Open</span>
                  <button className="text-sm font-semibold text-gray-900 hover:text-green-700">Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
