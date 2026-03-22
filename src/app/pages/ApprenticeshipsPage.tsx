import { apprenticeships, artisans } from "../data/mockData";
import { BookOpen, Clock, Award, CheckCircle2, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "../components/img_with_fallback/ImageWithFallback";
import { useState } from "react";

export function ApprenticeshipsPage() {
  const [selectedCraft, setSelectedCraft] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const crafts = ["All", ...Array.from(new Set(apprenticeships.map((a) => a.craft)))];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredApprenticeships = apprenticeships.filter((apprenticeship) => {
    const craftMatch = selectedCraft === "All" || apprenticeship.craft === selectedCraft;
    const levelMatch = selectedLevel === "All" || apprenticeship.level === selectedLevel;
    return craftMatch && levelMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">Apprenticeships</h1>
              <p className="text-xl opacity-90 mt-2">Learn from master artisans. Build your future.</p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BookOpen className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-2">Professional Training</h3>
              <p className="text-sm opacity-90">Comprehensive hands-on learning with master craftspeople</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-2">Recognized Certification</h3>
              <p className="text-sm opacity-90">Industry-recognized credentials upon completion</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle2 className="w-8 h-8 mb-3" />
              <h3 className="font-bold mb-2">Career Opportunities</h3>
              <p className="text-sm opacity-90">Build sustainable income through traditional crafts</p>
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
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
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
                Filter by Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <p className="text-gray-600 mb-6">
          Showing {filteredApprenticeships.length} program{filteredApprenticeships.length !== 1 ? "s" : ""}
        </p>

        {/* Apprenticeships List */}
        <div className="space-y-6">
          {filteredApprenticeships.map((apprenticeship) => {
            const artisan = artisans.find((a) => a.id === apprenticeship.artisanId);
            
            return (
              <div
                key={apprenticeship.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-80 h-64 md:h-auto flex-shrink-0">
                    {artisan && (
                      <ImageWithFallback
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {apprenticeship.craft} Apprenticeship
                        </h3>
                        <p className="text-amber-600 font-semibold">
                          with {apprenticeship.artisanName}
                        </p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold ${
                          apprenticeship.level === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : apprenticeship.level === "Intermediate"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {apprenticeship.level}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-6">{apprenticeship.description}</p>

                    {/* Key Info */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Duration</p>
                          <p className="font-bold text-gray-900">{apprenticeship.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Certification</p>
                          <p className="font-bold text-gray-900 text-sm">
                            {apprenticeship.certification}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {apprenticeship.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Skills You'll Learn</h4>
                      <div className="flex flex-wrap gap-2">
                        {apprenticeship.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply for This Program
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Apprenticeship Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Apply</h3>
              <p className="text-sm text-gray-600">
                Choose your craft and submit your application
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Match</h3>
              <p className="text-sm text-gray-600">
                We connect you with the perfect maâlem
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Learn</h3>
              <p className="text-sm text-gray-600">
                Hands-on training with master artisan
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Certify</h3>
              <p className="text-sm text-gray-600">
                Earn your certification and build your career
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
