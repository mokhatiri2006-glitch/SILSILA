import { workshops } from "../data/mockData";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/img_with_fallback/ImageWithFallback";
import { useState } from "react";

export function WorkshopsPage() {
  const [selectedCraft, setSelectedCraft] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const crafts = ["All", ...Array.from(new Set(workshops.map((w) => w.craft)))];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredWorkshops = workshops.filter((workshop) => {
    const craftMatch = selectedCraft === "All" || workshop.craft === selectedCraft;
    const difficultyMatch =
      selectedDifficulty === "All" || workshop.difficulty === selectedDifficulty;
    return craftMatch && difficultyMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-green-600 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cultural Workshops</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Immerse yourself in Moroccan craftsmanship. Create authentic treasures with master artisans.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-3xl font-bold mb-1">{workshops.length}</div>
              <div className="text-sm opacity-90">Workshops</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-3xl font-bold mb-1">2-4h</div>
              <div className="text-sm opacity-90">Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-3xl font-bold mb-1">4.8</div>
              <div className="text-sm opacity-90">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Craft
              </label>
              <select
                value={selectedCraft}
                onChange={(e) => setSelectedCraft(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
              >
                {crafts.map((craft) => (
                  <option key={craft} value={craft}>
                    {craft}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <p className="text-gray-600 mb-6">
          Showing {filteredWorkshops.length} workshop{filteredWorkshops.length !== 1 ? "s" : ""}
        </p>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {workshop.difficulty}
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="font-bold text-sm">{workshop.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{workshop.title}</h3>
                <p className="text-amber-600 text-sm font-semibold mb-3">
                  with {workshop.artisanName}
                </p>

                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {workshop.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>Max {workshop.maxParticipants} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>Fez Medina</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600">Price per person</p>
                    <p className="text-2xl font-bold text-green-600">{workshop.price} MAD</p>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Book a Workshop */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Book a Workshop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-bold mb-2">Authentic Experience</h3>
              <p className="text-sm text-gray-600">
                Learn from master artisans in their actual workshops using traditional techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="font-bold mb-2">Take It Home</h3>
              <p className="text-sm text-gray-600">
                Create your own handmade treasure to bring back as a unique souvenir
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="font-bold mb-2">Support Artisans</h3>
              <p className="text-sm text-gray-600">
                Your participation directly supports local craftspeople and preserves heritage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
