export default function AthleteProfile() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-600 to-black border border-gray-200" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gray-100" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h1 className="text-3xl font-black text-gray-900">Athlete Name</h1>
            <p className="mt-2 text-gray-700">School • Sport • Age</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <Stat label="Personal Best" value="10.42s" />
              <Stat label="Medals" value="12" />
              <Stat label="Competitions" value="24" />
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Story</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                A short biography about the athlete, background, achievements, and goals. Designed to be easy to read with generous spacing.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Recent Highlights</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <HighlightCard />
                <HighlightCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-2xl font-extrabold text-gray-900">{value}</div>
    </div>
  )
}

function HighlightCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200">
      <div className="aspect-video bg-gray-100" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">Event Title</h3>
        <p className="text-sm text-gray-700 mt-1">Short description of the highlight moment.
        </p>
      </div>
    </div>
  )
}
