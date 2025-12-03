import { Header } from "./Header";
import { Footer } from "./Footer";
import { CourseCard } from "./CourseCard";
import { TrendingUp, Award, Users, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  // Mock data cho khóa học
  const courses = [
    {
      id: "1",
      title: "Khóa học lập trình Web từ Cơ bản đến Nâng cao",
      instructor: "Nguyễn Văn A",
      image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 499000,
      originalPrice: 999000,
      rating: 4.8,
      reviewCount: 1234,
      students: 5678,
      duration: "12 giờ",
      lessons: 120,
      level: "Cơ bản",
      bestseller: true,
    },
    {
      id: "2",
      title: "Thiết kế đồ họa với Adobe Photoshop & Illustrator",
      instructor: "Trần Thị B",
      image: "https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBncmFwaGljcyUyMHRhYmxldHxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 399000,
      originalPrice: 799000,
      rating: 4.9,
      reviewCount: 892,
      students: 3456,
      duration: "8 giờ",
      lessons: 80,
      level: "Trung cấp",
      bestseller: true,
    },
    {
      id: "3",
      title: "Marketing Online từ A-Z cho Người mới bắt đầu",
      instructor: "Lê Văn C",
      image: "https://images.unsplash.com/photo-1590102425728-aa39769512ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ2NDA4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 599000,
      originalPrice: 1200000,
      rating: 4.7,
      reviewCount: 2145,
      students: 8901,
      duration: "15 giờ",
      lessons: 95,
      level: "Cơ bản",
    },
    {
      id: "4",
      title: "Quản trị doanh nghiệp hiện đại",
      instructor: "Phạm Thị D",
      image: "https://images.unsplash.com/photo-1707301280425-475534ec3cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY0NzQ5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 699000,
      originalPrice: 1400000,
      rating: 4.6,
      reviewCount: 567,
      students: 2345,
      duration: "10 giờ",
      lessons: 65,
      level: "Nâng cao",
    },
  ];

  const categories = [
    { name: "Lập trình", icon: "💻", count: 234 },
    { name: "Thiết kế", icon: "🎨", count: 189 },
    { name: "Kinh doanh", icon: "💼", count: 156 },
    { name: "Marketing", icon: "📱", count: 145 },
    { name: "Nhiếp ảnh", icon: "📷", count: 98 },
    { name: "Âm nhạc", icon: "🎵", count: 87 },
    { name: "Ngôn ngữ", icon: "🌍", count: 76 },
    { name: "Sức khỏe", icon: "💪", count: 65 },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, label: "Học viên", value: "50,000+" },
    { icon: <Play className="w-8 h-8" />, label: "Khóa học", value: "1,000+" },
    { icon: <Award className="w-8 h-8" />, label: "Giảng viên", value: "500+" },
    { icon: <TrendingUp className="w-8 h-8" />, label: "Tỷ lệ hoàn thành", value: "95%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Học tập không giới hạn với hàng nghìn khóa học</h1>
              <p className="text-lg mb-8 opacity-90">
                Khám phá kiến thức mới, nâng cao kỹ năng và phát triển sự nghiệp của bạn với các khóa học chất lượng cao từ các chuyên gia hàng đầu.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-lg hover:shadow-lg transition">
                  Khám phá ngay
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[var(--primary-color)] transition">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1546430498-05c7b929830e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjQ3MzQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Online Learning"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-[var(--primary-color)] mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Danh mục khóa học</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition cursor-pointer text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h4 className="mb-1">{category.name}</h4>
                <p className="text-sm text-gray-500">{category.count} khóa học</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2>Khóa học nổi bật</h2>
            <button className="text-[var(--primary-color)] hover:underline">
              Xem tất cả →
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Trở thành giảng viên</h2>
          <p className="text-lg mb-8 opacity-90">
            Chia sẻ kiến thức của bạn với hàng nghìn học viên trên toàn quốc. Kiếm thu nhập từ đam mê giảng dạy của bạn.
          </p>
          <button className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-lg hover:shadow-lg transition">
            Bắt đầu giảng dạy
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
