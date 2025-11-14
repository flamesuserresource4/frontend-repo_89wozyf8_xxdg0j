export default function News() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-black text-gray-900">News</h1>
        <p className="mt-2 text-gray-700">Updates, stories, features.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <article key={i} className="rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-gray-100 to-white" />
              <div className="p-5">
                <h3 className="font-bold text-gray-900">Headline {i + 1}: Big performance in Abuja</h3>
                <p className="mt-1 text-sm text-gray-700 line-clamp-2">Short teaser text about the article content, keeping things concise and scannable.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">2h ago</span>
                  <button className="text-sm font-semibold text-gray-900 hover:text-green-700">Read →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
