import { useParams, Link } from "react-router";
import { artisans, workshops, apprenticeships, reviews } from "../data/mockData";
import { Star, MapPin, Award, Calendar, BookOpen, Video } from "lucide-react";
import { ImageWithFallback } from "../components/img_with_fallback/ImageWithFallback";

export function ArtisanProfilePage() {
  const { id } = useParams();
  const artisan = artisans.find((a) => a.id === id);

  if (!artisan) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Artisan not found</h1>
        <Link to="/SILSILA/artisans" className="text-amber-600 hover:underline mt-4 inline-block">
          Back to artisans
        </Link>
      </div>
    );
  }

  const artisanWorkshops = workshops.filter((w) => w.artisanId === artisan.id);
  const artisanApprenticeships = apprenticeships.filter((a) => a.artisanId === artisan.id);
  const artisanReviews = reviews.filter((r) => r.craft === artisan.craft).slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <ImageWithFallback
          src={artisan.image}
          alt={artisan.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-end gap-4">
            <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <ImageWithFallback
                src={artisan.image}
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white pb-2">
              <h1 className="text-4xl font-bold mb-2">{artisan.name}</h1>
              <p className="text-xl text-amber-300 font-semibold">{artisan.craft}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  <span className="text-2xl font-bold">{artisan.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{artisan.reviews} Reviews</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-amber-600 mr-2" />
                  <span className="text-2xl font-bold">{artisan.experience}</span>
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                </div>
                <p className="text-sm text-gray-700 font-semibold">{artisan.location}</p>
              </div>
            </div>

            {/* Mémoire Vivante (Living Memory) */}
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold">Mémoire Vivante</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{artisan.story}</p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <p className="text-sm text-gray-700 italic">
                  "Every piece I create carries the wisdom of my ancestors and the promise to future generations. 
                  This is not just craft—it is our heritage, our identity, our soul."
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Specialties</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {artisan.specialties.map((specialty) => (
                  <div
                    key={specialty}
                    className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="font-semibold text-gray-800">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshops Offered */}
            {artisanWorkshops.length > 0 && (
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-bold">Workshops Offered</h2>
                </div>
                <div className="space-y-4">
                  {artisanWorkshops.map((workshop) => (
                    <div
                      key={workshop.id}
                      className="flex gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-amber-300 transition-colors"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={workshop.image}
                          alt={workshop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{workshop.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span>{workshop.duration}</span>
                          <span className="font-bold text-amber-600">{workshop.price} MAD</span>
                        </div>
                        <p className="text-sm text-gray-700">{workshop.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Apprenticeships */}
            {artisanApprenticeships.length > 0 && (
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-bold">Apprenticeship Programs</h2>
                </div>
                <div className="space-y-4">
                  {artisanApprenticeships.map((apprenticeship) => (
                    <div
                      key={apprenticeship.id}
                      className="p-6 border-2 border-gray-200 rounded-lg hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg">{apprenticeship.craft}</h3>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {apprenticeship.level}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{apprenticeship.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Duration</p>
                          <p className="font-semibold">{apprenticeship.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Certification</p>
                          <p className="font-semibold text-sm">{apprenticeship.certification}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {apprenticeship.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            {artisanReviews.length > 0 && (
              <div className="bg-white rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
                <div className="space-y-6">
                  {artisanReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                          {review.userName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{review.userName}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "fill-amber-500 text-amber-500"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 sticky top-20">
              <h3 className="font-bold text-lg mb-4">Connect with {artisan.name.split(" ")[0]}</h3>
              
              <div className="space-y-3">
                <Link
                  to="/SILSILA/workshops"
                  className="block w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center px-4 py-3 rounded-lg hover:shadow-lg transition-shadow"
                >
                  Book a Workshop
                </Link>
                <Link
                  to="/SILSILA/apprenticeships"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply for Apprenticeship
                </Link>
                <button className="block w-full border-2 border-gray-300 text-gray-700 text-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Send Message
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Location</h4>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{artisan.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
