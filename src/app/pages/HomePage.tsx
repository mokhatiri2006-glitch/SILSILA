import { Link } from "react-router";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Sparkles,
} from "lucide-react";
import {
  artisans,
  workshops,
  impactStats,
} from "../data/mockData";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/img_with_fallback/ImageWithFallback";

export function HomePage() {
  const featuredArtisans = artisans.slice(0, 3);
  const featuredWorkshops = workshops.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0YzOTIzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-gray-700">
                  Preserving Heritage, Empowering Futures
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Silsila
                <span className="block text-amber-600 mt-2">
                  سلسلة التراث
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                A platform connecting master artisans, aspiring
                youth, and curious travelers to transmit
                Morocco's rich craftsmanship traditions.
              </p>

              {/* Impact Numbers */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-amber-600">
                    +{impactStats.artisansSupported}
                  </div>
                  <div className="text-sm text-gray-600">
                    Artisans
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">
                    +{impactStats.youthTrained}
                  </div>
                  <div className="text-sm text-gray-600">
                    Jeunes formés
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">
                    +{impactStats.workshopsCompleted}
                  </div>
                  <div className="text-sm text-gray-600">
                    Expériences
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/workshops"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
                >
                  Book a Workshop
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/apprenticeships"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-colors"
                >
                  Become an Apprentice
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/4915825/pexels-photo-4915825.jpeg"
                  alt="Cultural workshop experience"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Silsila */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            What is Silsila?
          </h2>
          <p className="text-lg opacity-90 max-w-3xl">
            Silsila (سلسلة) means "chain" or "lineage" in
            Arabic. We connect three vital communities: master
            artisans preserving ancient crafts, young people
            seeking meaningful careers, and travelers hungry for
            authentic cultural experiences. Together, we create
            a sustainable ecosystem where tradition meets
            opportunity.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Three Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-amber-300 transition-colors"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              For Artisans
            </h3>
            <p className="text-gray-600 mb-4">
              Share your mastery with the world. Earn income
              through workshops and apprenticeships while
              preserving your craft for future generations.
            </p>
            <Link
              to="/artisans"
              className="text-amber-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Meet our artisans{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-amber-300 transition-colors"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              For Youth
            </h3>
            <p className="text-gray-600 mb-4">
              Learn valuable skills from master craftspeople.
              Earn certifications and build a sustainable career
              in traditional craftsmanship.
            </p>
            <Link
              to="/apprenticeships"
              className="text-amber-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Explore apprenticeships{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-amber-300 transition-colors"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              For Tourists
            </h3>
            <p className="text-gray-600 mb-4">
              Experience authentic Moroccan culture through
              immersive workshops. Create your own handmade
              treasures while supporting local communities.
            </p>
            <Link
              to="/workshops"
              className="text-amber-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Book an experience{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Artisans
            </h2>
            <Link
              to="/artisans"
              className="text-amber-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtisans.map((artisan) => (
              <Link
                key={artisan.id}
                to={`/artisans/${artisan.id}`}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {artisan.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">
                    {artisan.name}
                  </h3>
                  <p className="text-amber-600 text-sm mb-2">
                    {artisan.craft}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {artisan.experience} years experience
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-2">
                    {artisan.story}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Workshops
            </h2>
            <Link
              to="/workshops"
              className="text-amber-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-amber-300 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {workshop.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    with {workshop.artisanName}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">
                      {workshop.duration}
                    </span>
                    <span className="font-bold text-amber-600">
                      {workshop.price} MAD
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}