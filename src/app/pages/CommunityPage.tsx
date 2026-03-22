import { reviews } from "../data/mockData";
import { Star, MessageCircle, ThumbsUp, Share2 } from "lucide-react";
import { ImageWithFallback } from "../components/img_with_fallback/ImageWithFallback";

const progressStories = [
  {
    id: 1,
    name: "Youssef Benjelloun",
    apprentice: true,
    craft: "Zellige",
    image: "https://images.unsplash.com/photo-1753164726456-487d6c6d1f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFwcHJlbnRpY2UlMjBsZWFybmluZyUyMGNyYWZ0fGVufDF8fHx8MTc3NDE0NTkzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 65,
    level: "Apprentice Level 2",
    story: "Three months into my zellige apprenticeship and I've already mastered basic geometric patterns. Today I completed my first complex 8-point star design! 🌟",
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    name: "Amina Tahiri",
    apprentice: true,
    craft: "Pottery",
    image: "https://images.unsplash.com/photo-1753164726456-487d6c6d1f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFwcHJlbnRpY2UlMjBsZWFybmluZyUyMGNyYWZ0fGVufDF8fHx8MTc3NDE0NTkzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 85,
    level: "Assistant Artisan",
    story: "After 8 months of training, I just received my certification! Starting next week, I'll be teaching beginner workshops alongside my master. This platform changed my life. 🙏",
    likes: 127,
    comments: 23,
  },
  {
    id: 3,
    name: "Karim El Mansouri",
    apprentice: true,
    craft: "Wood Carving",
    image: "https://images.unsplash.com/photo-1753164726456-487d6c6d1f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFwcHJlbnRpY2UlMjBsZWFybmluZyUyMGNyYWZ0fGVufDF8fHx8MTc3NDE0NTkzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 40,
    level: "Apprentice Level 1",
    story: "Just finished my first month learning cedar carving. The smell of the wood, the precision required - it's meditation in motion. Grateful to be part of this lineage.",
    likes: 38,
    comments: 6,
  },
];

export function CommunityPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-pink-600 to-rose-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-10 h-10" />
            <h1 className="text-4xl lg:text-5xl font-bold">Community</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl">
            Stories, progress, and experiences from our vibrant community of artisans, apprentices, and cultural explorers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Community Feed</h2>

            {/* Apprentice Progress Stories */}
            {progressStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {story.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{story.name}</h3>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold">
                        Apprentice
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{story.craft} • {story.level}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Training Progress</span>
                    <span className="font-bold text-amber-600">{story.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-amber-600 to-orange-600 h-2 rounded-full transition-all"
                      style={{ width: `${story.progress}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-gray-800 mb-4">{story.story}</p>

                {story.image && (
                  <div className="rounded-lg overflow-hidden mb-4">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Interactions */}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-200 text-sm text-gray-600">
                  <button className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{story.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-amber-600 transition-colors ml-auto">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Tourist Reviews */}
            <h2 className="text-2xl font-bold text-gray-900 pt-8">Tourist Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {review.userName.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{review.userName}</h3>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                        Tourist
                      </span>
                    </div>
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

                <p className="text-sm text-gray-600 mb-2">{review.craft} Workshop</p>
                <p className="text-gray-800 mb-4">{review.comment}</p>

                {/* Interactions */}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-200 text-sm text-gray-600">
                  <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Certification Badges */}
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-20">
              <h3 className="font-bold text-lg mb-4">Achievement Badges</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-3xl">🥉</div>
                  <div>
                    <p className="font-semibold text-sm">Apprentice Level 1</p>
                    <p className="text-xs text-gray-600">Complete first month</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-3xl">🥈</div>
                  <div>
                    <p className="font-semibold text-sm">Apprentice Level 2</p>
                    <p className="text-xs text-gray-600">Master basic techniques</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-3xl">🥇</div>
                  <div>
                    <p className="font-semibold text-sm">Assistant Artisan</p>
                    <p className="text-xs text-gray-600">Earn certification</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-2 border-amber-400">
                  <div className="text-3xl">👑</div>
                  <div>
                    <p className="font-semibold text-sm">Master Artisan</p>
                    <p className="text-xs text-gray-600">Train other apprentices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="font-bold text-lg mb-4">Community Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Active Members</span>
                  <span className="font-bold text-purple-600">179</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Stories Shared</span>
                  <span className="font-bold text-purple-600">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Reviews Posted</span>
                  <span className="font-bold text-purple-600">421</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Badges Earned</span>
                  <span className="font-bold text-purple-600">156</span>
                </div>
              </div>
            </div>

            {/* Join Community */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Join Our Community</h3>
              <p className="text-sm opacity-90 mb-4">
                Share your journey, connect with fellow learners, and celebrate the preservation of Moroccan heritage.
              </p>
              <button className="w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
