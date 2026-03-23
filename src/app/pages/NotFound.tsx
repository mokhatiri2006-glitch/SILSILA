import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-amber-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/SILSILA/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
