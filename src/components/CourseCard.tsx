import { Star, Clock, Users, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  lessons: number;
  level: string;
  bestseller?: boolean;
}

export function CourseCard({
  title,
  instructor,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  students,
  duration,
  lessons,
  level,
  bestseller,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 card-hover cursor-pointer">
      {/* Course Image */}
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {bestseller && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-gray-900 px-3 py-1 text-xs rounded">
            Bán chạy
          </span>
        )}
      </div>

      {/* Course Info */}
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </span>
          <span className="text-sm text-gray-500">({reviewCount})</span>
          <span className="text-sm text-gray-500">• {students.toLocaleString()} học viên</span>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {lessons} bài
          </span>
        </div>

        <div className="mb-3">
          <span className="inline-block bg-purple-100 text-[var(--primary-color)] text-xs px-2 py-1 rounded">
            {level}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl">{price.toLocaleString()}₫</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice.toLocaleString()}₫
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
