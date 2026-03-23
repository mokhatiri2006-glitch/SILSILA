import { Link } from "react-router";
import { artisans } from "../data/mockData";
import { Star, MapPin, Award } from "lucide-react";
import { ImageWithFallback } from "../components/img_with_fallback/ImageWithFallback";
import { useState } from "react";

export function ArtisansPage() {
  const [selectedCraft, setSelectedCraft] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  const crafts = ["All", ...Array.from(new Set(artisans.map((a) => a.craft)))];
  const locations = ["All", ...Array.from(new Set(artisans.map((a) => a.location)))];

  const filteredArtisans = artisans.filter((artisan) => {
    const craftMatch = selectedCraft === "All" || artisan.craft === selectedCraft;
    const locationMatch = selectedLocation === "All" || artisan.location === selectedLocation;
    return craftMatch && locationMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Master Artisans</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover the maâlems preserving Morocco's ancient craftsmanship traditions
          </p>
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
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
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
                Filter by Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredArtisans.length} artisan{filteredArtisans.length !== 1 ? "s" : ""}
        </p>

        {/* Artisans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtisans.map((artisan) => (
            <Link
              key={artisan.id}
              to={`/SILSILA/artisans/${artisan.id}`}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="font-bold text-sm">{artisan.rating}</span>
                  </div>
                  <p className="text-xs text-gray-600">{artisan.reviews} reviews</p>
                </div>

                {/* Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {artisan.availableForApprentices && (
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Apprenticeships
                    </div>
                  )}
                  {artisan.offersWorkshops && (
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Workshops
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{artisan.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{artisan.craft}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{artisan.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Award className="w-4 h-4" />
                  <span>{artisan.experience} years experience</span>
                </div>

                <p className="text-gray-700 text-sm line-clamp-3 mb-4">{artisan.story}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties.slice(0, 2).map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                  {artisan.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      +{artisan.specialties.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
