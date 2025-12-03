import { Header } from "./Header";
import { Footer } from "./Footer";
import { Star, Clock, Users, Award, Download, PlayCircle, CheckCircle, Globe, BarChart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const course = {
    title: "Khóa học lập trình Web từ Cơ bản đến Nâng cao",
    subtitle: "Học HTML, CSS, JavaScript, React và xây dựng ứng dụng web thực tế",
    instructor: {
      name: "Nguyễn Văn A",
      title: "Senior Developer",
      students: 15000,
      courses: 12,
      rating: 4.8,
    },
    image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: 499000,
    originalPrice: 999000,
    rating: 4.8,
    reviewCount: 1234,
    students: 5678,
    duration: "12 giờ",
    lessons: 120,
    level: "Cơ bản",
    language: "Tiếng Việt",
    lastUpdated: "Tháng 12, 2025",
  };

  const whatYouWillLearn = [
    "Xây dựng website hoàn chỉnh từ đầu đến cuối",
    "Thành thạo HTML5, CSS3 và JavaScript hiện đại",
    "Làm việc với React và các thư viện phổ biến",
    "Responsive Design cho mọi thiết bị",
    "Tích hợp API và làm việc với Database",
    "Deploy ứng dụng lên Production",
    "Best practices và coding standards",
    "Debug và tối ưu hiệu suất ứng dụng",
  ];

  const curriculum = [
    {
      title: "Giới thiệu về Web Development",
      lessons: 8,
      duration: "45 phút",
      items: [
        { title: "Chào mừng đến với khóa học", duration: "3:25", free: true },
        { title: "Thiết lập môi trường làm việc", duration: "8:45", free: true },
        { title: "Cấu trúc của một trang web", duration: "6:30", free: false },
        { title: "HTML cơ bản", duration: "12:15", free: false },
      ],
    },
    {
      title: "HTML & CSS từ cơ bản đến nâng cao",
      lessons: 25,
      duration: "3 giờ",
      items: [
        { title: "HTML Tags và Attributes", duration: "15:20", free: false },
        { title: "CSS Selectors và Properties", duration: "18:45", free: false },
        { title: "Flexbox và Grid Layout", duration: "22:30", free: false },
      ],
    },
    {
      title: "JavaScript Fundamentals",
      lessons: 30,
      duration: "4 giờ",
      items: [
        { title: "Biến và kiểu dữ liệu", duration: "16:40", free: false },
        { title: "Vòng lặp và điều kiện", duration: "14:25", free: false },
        { title: "Functions và Scope", duration: "19:15", free: false },
      ],
    },
    {
      title: "React Framework",
      lessons: 35,
      duration: "5 giờ",
      items: [
        { title: "Giới thiệu về React", duration: "12:30", free: false },
        { title: "Components và Props", duration: "20:15", free: false },
        { title: "State và Lifecycle", duration: "25:40", free: false },
      ],
    },
  ];

  const reviews = [
    {
      name: "Trần Văn B",
      rating: 5,
      date: "2 tuần trước",
      comment: "Khóa học rất chi tiết và dễ hiểu. Giảng viên giải thích rất tốt, phù hợp cho người mới bắt đầu.",
    },
    {
      name: "Nguyễn Thị C",
      rating: 4,
      date: "1 tháng trước",
      comment: "Nội dung phong phú, nhiều bài tập thực hành. Tuy nhiên có một số phần hơi nhanh.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showCategories={false} />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 text-sm rounded">
                  Bán chạy nhất
                </span>
              </div>
              <h1 className="mb-4">{course.title}</h1>
              <p className="text-lg mb-6 opacity-90">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {course.rating} ({course.reviewCount} đánh giá)
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students.toLocaleString()} học viên
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  NV
                </div>
                <div>
                  <p>Tạo bởi <span className="text-purple-300 hover:underline cursor-pointer">{course.instructor.name}</span></p>
                  <p className="text-sm opacity-75">Cập nhật {course.lastUpdated}</p>
                </div>
              </div>
            </div>

            {/* Right Card - Mobile hidden */}
            <div className="hidden lg:block">
              <div className="bg-white text-gray-900 rounded-lg overflow-hidden sticky top-20">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{course.price.toLocaleString()}₫</span>
                    <span className="text-lg text-gray-500 line-through">
                      {course.originalPrice.toLocaleString()}₫
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">
                      -50%
                    </span>
                  </div>

                  <button className="w-full btn-primary mb-3">
                    Mua ngay
                  </button>
                  <button className="w-full btn-secondary">
                    Thêm vào giỏ hàng
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Đảm bảo hoàn tiền trong 30 ngày
                  </p>

                  <div className="mt-6 pt-6 border-t space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cấp độ:</span>
                      <span>{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thời lượng:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bài học:</span>
                      <span>{course.lessons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ngôn ngữ:</span>
                      <span>{course.language}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-lg border border-gray-200 mb-6">
                <div className="flex border-b overflow-x-auto">
                  {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 whitespace-nowrap ${
                        activeTab === tab
                          ? "border-b-2 border-[var(--primary-color)] text-[var(--primary-color)]"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab === "overview" && "Tổng quan"}
                      {tab === "curriculum" && "Nội dung"}
                      {tab === "instructor" && "Giảng viên"}
                      {tab === "reviews" && "Đánh giá"}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <div>
                      <h3 className="mb-4">Bạn sẽ học được gì?</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <h3 className="mb-4">Mô tả khóa học</h3>
                        <p className="text-gray-700 mb-4">
                          Khóa học này được thiết kế cho những người muốn bắt đầu sự nghiệp trong lĩnh vực phát triển web. 
                          Bạn sẽ học từ những kiến thức cơ bản nhất về HTML và CSS, cho đến việc xây dựng các ứng dụng 
                          web phức tạp với React.
                        </p>
                        <p className="text-gray-700">
                          Với hơn 12 giờ video hướng dẫn chi tiết và nhiều bài tập thực hành, bạn sẽ có được nền tảng 
                          vững chắc để phát triển sự nghiệp trong ngành công nghệ.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Curriculum Tab */}
                  {activeTab === "curriculum" && (
                    <div>
                      <div className="mb-6">
                        <h3>Nội dung khóa học</h3>
                        <p className="text-gray-600">
                          {curriculum.length} chương • {course.lessons} bài học • {course.duration} video
                        </p>
                      </div>

                      <div className="space-y-4">
                        {curriculum.map((section, index) => (
                          <details key={index} className="border border-gray-200 rounded-lg">
                            <summary className="p-4 cursor-pointer hover:bg-gray-50">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4>{section.title}</h4>
                                  <p className="text-sm text-gray-600">
                                    {section.lessons} bài học • {section.duration}
                                  </p>
                                </div>
                              </div>
                            </summary>
                            <div className="border-t">
                              {section.items.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between p-4 hover:bg-gray-50 border-b last:border-b-0"
                                >
                                  <div className="flex items-center gap-3">
                                    <PlayCircle className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm">{item.title}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    {item.free && (
                                      <span className="text-xs text-[var(--primary-color)]">
                                        Xem thử
                                      </span>
                                    )}
                                    <span className="text-sm text-gray-500">{item.duration}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Instructor Tab */}
                  {activeTab === "instructor" && (
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                          NV
                        </div>
                        <div>
                          <h3 className="mb-1">{course.instructor.name}</h3>
                          <p className="text-gray-600 mb-3">{course.instructor.title}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {course.instructor.rating} Đánh giá
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {course.instructor.students.toLocaleString()} Học viên
                            </span>
                            <span className="flex items-center gap-1">
                              <PlayCircle className="w-4 h-4" />
                              {course.instructor.courses} Khóa học
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Với hơn 10 năm kinh nghiệm trong phát triển web và giảng dạy, tôi đã giúp hàng nghìn học viên 
                        bắt đầu sự nghiệp trong lĩnh vực công nghệ. Tôi tin rằng lập trình không chỉ là viết code, 
                        mà còn là giải quyết vấn đề và tư duy sáng tạo.
                      </p>
                    </div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === "reviews" && (
                    <div>
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-5xl mb-2">{course.rating}</div>
                            <div className="flex gap-1 mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <p className="text-sm text-gray-600">Điểm đánh giá</p>
                          </div>
                          <div className="flex-1">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <div key={star} className="flex items-center gap-2 mb-2">
                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-yellow-400"
                                    style={{ width: `${star === 5 ? 75 : star === 4 ? 20 : 5}%` }}
                                  />
                                </div>
                                <span className="text-sm text-gray-600 w-20">
                                  {star} sao
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {reviews.map((review, index) => (
                          <div key={index} className="border-b pb-6 last:border-b-0">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                {review.name.charAt(0)}
                              </div>
                              <div className="flex-1">
                                <p>{review.name}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`w-4 h-4 ${
                                          star <= review.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
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
              </div>
            </div>

            {/* Mobile Purchase Card */}
            <div className="lg:hidden">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky bottom-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{course.price.toLocaleString()}₫</span>
                    <span className="text-sm text-gray-500 line-through">
                      {course.originalPrice.toLocaleString()}₫
                    </span>
                  </div>
                  <span className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">
                    -50%
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 btn-primary">Mua ngay</button>
                  <button className="btn-secondary px-4">Giỏ hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
