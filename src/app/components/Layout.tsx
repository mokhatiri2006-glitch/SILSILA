import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Users, BookOpen, Calendar, TrendingUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Chatbot } from "./Chatbot";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Artisans", href: "/SILSILA/artisans", icon: Users },
    { name: "Apprenticeships", href: "/SILSILA/apprenticeships", icon: BookOpen },
    { name: "Workshops", href: "/SILSILA/workshops", icon: Calendar },
    { name: "Impact", href: "/SILSILA/impact", icon: TrendingUp },
    { name: "Community", href: "/SILSILA/community", icon: MessageCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/SILSILA/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Silsila
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-amber-50 text-amber-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-amber-50 text-amber-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold">Silsila</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting artisans, youth, and tourists to preserve Moroccan craftsmanship and create sustainable livelihoods.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/SILSILA/artisans" className="hover:text-white transition-colors">Find Artisans</Link></li>
                <li><Link to="/SILSILA/apprenticeships" className="hover:text-white transition-colors">Become an Apprentice</Link></li>
                <li><Link to="/SILSILA/workshops" className="hover:text-white transition-colors">Book a Workshop</Link></li>
                <li><Link to="/SILSILA/impact" className="hover:text-white transition-colors">Our Impact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Silsila Corners</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📍 Fez Medina - Tala'a Kebira</li>
                <li>📍 Marrakech - Souk des Teinturiers</li>
                <li>📍 Rabat - Oudayas Kasbah</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Silsila. Preserving heritage, empowering futures.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}