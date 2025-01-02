import { Heart, Clock } from "lucide-react";

export const HeroTags = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-6">
      <span className="px-4 py-1.5 rounded-full bg-custom-pink/20 text-custom-pink font-medium text-sm inline-flex items-center">
        <Heart size={16} className="mr-2" />
        Empowering Teachers & Parents
      </span>
      <span className="px-4 py-1.5 rounded-full bg-custom-yellow text-gray-800 font-medium text-sm inline-flex items-center">
        <Clock size={16} className="mr-2" />
        Early Access - 50% Off
      </span>
    </div>
  );
};