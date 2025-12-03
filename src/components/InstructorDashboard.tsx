import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  Plus,
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  BarChart3,
  Star,
  MessageSquare,
  Video,
  Settings,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState("courses");

  const instructorCourses = [
    {
      id: 1,
      title: "Khóa học lập trình Web từ Cơ bản đến Nâng cao",
      image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      students: 5678,
      rating: 4.8,
      reviews: 1234,
      revenue: "28,500,000₫",
      status: "published",
    },
    {
      id: 2,
      title: "React Advanced - Xây dựng ứng dụng thực tế",
      image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      students: 3421,
      rating: 4.9,
      reviews: 567,
      revenue: "17,100,000₫",
      status: "published",
    },
    {
      id: 3,
      title: "Node.js & Express - Backend Development",
      image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      students: 2145,
      rating: 4.7,
      reviews: 389,
      revenue: "10,700,000₫",
      status: "draft",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Tổng học viên",
      value: "11,244",
      change: "+12%",
      color: "bg-blue-500",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Doanh thu tháng này",
      value: "56,300,000₫",
      change: "+8%",
      color: "bg-green-500",
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: "Đánh giá trung bình",
      value: "4.8",
      change: "+0.2",
      color: "bg-yellow-500",
    },
    {
      icon: <Video className="w-6 h-6" />,
      label: "Khóa học đang bán",
      value: "2",
      change: "+1",
      color: "bg-purple-500",
    },
  ];

  const recentReviews = [
    {
      student: "Nguyễn Văn A",
      course: "Lập trình Web",
      rating: 5,
      comment: "Khóa học rất hay và chi tiết!",
      date: "2 giờ trước",
    },
    {
      student: "Trần Thị B",
      course: "React Advanced",
      rating: 4,
      comment: "Nội dung chất lượng, giảng viên nhiệt tình.",
      date: "5 giờ trước",
    },
    {
      student: "Lê Văn C",
      course: "Lập trình Web",
      rating: 5,
      comment: "Đáng giá tiền, học được nhiều kiến thức.",
      date: "1 ngày trước",
    },
  ];

  const recentQuestions = [
    {
      student: "Phạm Thị D",
      course: "Lập trình Web",
      question: "Làm thế nào để deploy ứng dụng lên Vercel?",
      date: "1 giờ trước",
      status: "pending",
    },
    {
      student: "Hoàng Văn E",
      course: "React Advanced",
      question: "Có thể giải thích thêm về React Hooks không ạ?",
      date: "3 giờ trước",
      status: "answered",
    },
  ];

  const monthlyRevenue = [
    { month: "T7", amount: 45 },
    { month: "T8", amount: 52 },
    { month: "T9", amount: 48 },
    { month: "T10", amount: 61 },
    { month: "T11", amount: 58 },
    { month: "T12", amount: 56 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="mb-2">Dashboard Giảng viên</h1>
              <p className="text-gray-600">Quản lý khóa học và theo dõi hiệu suất của bạn</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Plus className="w-5 h-5" />
              Tạo khóa học mới
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} text-white w-12 h-12 rounded-lg flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <span className="text-green-600 text-sm flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Courses & Revenue */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex border-b overflow-x-auto">
                {["courses", "analytics", "students"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 whitespace-nowrap ${
                      activeTab === tab
                        ? "border-b-2 border-purple-600 text-purple-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab === "courses" && "Khóa học của tôi"}
                    {tab === "analytics" && "Phân tích"}
                    {tab === "students" && "Học viên"}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === "courses" && (
                  <div className="space-y-4">
                    {instructorCourses.map((course) => (
                      <div
                        key={course.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <ImageWithFallback
                            src={course.image}
                            alt={course.title}
                            className="w-full sm:w-48 h-32 object-cover"
                          />
                          <div className="p-4 flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <h4 className="mb-1 line-clamp-1">{course.title}</h4>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {course.students.toLocaleString()} học viên
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    {course.rating} ({course.reviews})
                                  </span>
                                </div>
                              </div>
                              <span
                                className={`px-3 py-1 text-xs rounded-full ${
                                  course.status === "published"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {course.status === "published" ? "Đang bán" : "Bản nháp"}
                              </span>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              <div className="text-purple-600">
                                Doanh thu: {course.revenue}
                              </div>
                              <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded">
                                  <Settings className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "analytics" && (
                  <div>
                    <h3 className="mb-6">Doanh thu 6 tháng gần đây</h3>
                    <div className="flex items-end justify-between gap-3 h-64 mb-4">
                      {monthlyRevenue.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="flex-1 flex items-end w-full">
                            <div
                              className="w-full bg-purple-500 rounded-t hover:bg-purple-600 transition cursor-pointer relative group"
                              style={{ height: `${(data.amount / 70) * 100}%` }}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                {data.amount}tr
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 mt-3">{data.month}</div>
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 mt-8">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Tổng doanh thu</div>
                        <div className="text-2xl text-purple-600">320tr</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Trung bình/tháng</div>
                        <div className="text-2xl text-blue-600">53.3tr</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Tăng trưởng</div>
                        <div className="text-2xl text-green-600">+12%</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "students" && (
                  <div>
                    <h3 className="mb-4">Học viên gần đây</h3>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                              {String.fromCharCode(65 + i)}
                            </div>
                            <div>
                              <p className="text-sm">Học viên {i}</p>
                              <p className="text-xs text-gray-500">Đăng ký {i} ngày trước</p>
                            </div>
                          </div>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {3 - i >= 0 ? `${3 - i} khóa học` : "1 khóa học"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Reviews & Questions */}
          <div className="space-y-8">
            {/* Recent Reviews */}
            <section className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500" />
                <h3>Đánh giá gần đây</h3>
              </div>

              <div className="space-y-4">
                {recentReviews.map((review, index) => (
                  <div key={index} className="pb-4 border-b last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm mb-1">{review.student}</p>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3 h-3 ${
                                star <= review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{review.comment}</p>
                    <p className="text-xs text-gray-500">{review.course}</p>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                Xem tất cả đánh giá
              </button>
            </section>

            {/* Recent Questions */}
            <section className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <h3>Câu hỏi cần trả lời</h3>
              </div>

              <div className="space-y-4">
                {recentQuestions.map((q, index) => (
                  <div key={index} className="pb-4 border-b last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm">{q.student}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          q.status === "pending"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {q.status === "pending" ? "Chưa trả lời" : "Đã trả lời"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{q.question}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{q.course}</span>
                      <span>{q.date}</span>
                    </div>
                    {q.status === "pending" && (
                      <button className="mt-2 text-sm text-purple-600 hover:underline">
                        Trả lời ngay →
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                Xem tất cả câu hỏi
              </button>
            </section>

            {/* Quick Actions */}
            <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-6">
              <h3 className="mb-4">Hành động nhanh</h3>
              <div className="space-y-2">
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-3 rounded text-left transition">
                  📊 Xem báo cáo chi tiết
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-3 rounded text-left transition">
                  💬 Gửi thông báo cho học viên
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-3 rounded text-left transition">
                  ⚙️ Cài đặt khóa học
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
