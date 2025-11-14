import { Play, Image as ImageIcon } from 'lucide-react'

export default function Media() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-black text-gray-900">Media</h1>
        <p className="mt-2 text-gray-700">Highlights, reels, photo stories.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 overflow-hidden bg-white">
              <div className="aspect-video relative bg-gray-100">
                <button className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/90 border border-gray-200 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-5 w-5 text-gray-900" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Highlight {i + 1}</h3>
                <p className="text-sm text-gray-700 mt-1">Short caption for the moment.</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-gray-900">Photo Stories</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-gray-400" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
