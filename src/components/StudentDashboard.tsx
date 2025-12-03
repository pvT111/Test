import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  BarChart3,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function StudentDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const myCourses = [
    {
      id: 1,
      title: "Khóa học lập trình Web từ Cơ bản đến Nâng cao",
      instructor: "Nguyễn Văn A",
      image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 45,
      lastAccessed: "2 giờ trước",
    },
    {
      id: 2,
      title: "Thiết kế đồ họa với Adobe Photoshop",
      instructor: "Trần Thị B",
      image: "https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBncmFwaGljcyUyMHRhYmxldHxlbnwxfHx8fDE3NjQ3NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 72,
      lastAccessed: "1 ngày trước",
    },
    {
      id: 3,
      title: "Marketing Online từ A-Z",
      instructor: "Lê Văn C",
      image: "https://images.unsplash.com/photo-1590102425728-aa39769512ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ2NDA4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      progress: 28,
      lastAccessed: "3 ngày trước",
    },
  ];

  const certificates = [
    {
      title: "Lập trình Python cơ bản",
      date: "15/11/2025",
      instructor: "Nguyễn Văn D",
    },
    {
      title: "UI/UX Design Foundation",
      date: "02/10/2025",
      instructor: "Trần Thị E",
    },
  ];

  const weeklyActivity = [
    { day: "T2", hours: 2.5 },
    { day: "T3", hours: 1.5 },
    { day: "T4", hours: 3 },
    { day: "T5", hours: 2 },
    { day: "T6", hours: 4 },
    { day: "T7", hours: 1 },
    { day: "CN", hours: 3.5 },
  ];

  const stats = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: "Khóa học đang học",
      value: "3",
      color: "bg-blue-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Giờ học tuần này",
      value: "17.5",
      color: "bg-purple-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Chứng chỉ đã đạt",
      value: "2",
      color: "bg-yellow-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Chuỗi học tập",
      value: "7 ngày",
      color: "bg-green-500",
    },
  ];

  const upcomingTasks = [
    { title: "Hoàn thành bài tập HTML", course: "Lập trình Web", dueDate: "Hôm nay" },
    { title: "Xem video về CSS Grid", course: "Lập trình Web", dueDate: "Ngày mai" },
    { title: "Nộp dự án thiết kế Logo", course: "Thiết kế đồ họa", dueDate: "3 ngày" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeItem="my-courses"
        />

        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="mb-2">Xin chào, Nguyễn Văn A!</h1>
              <p className="text-gray-600">Sẵn sàng tiếp tục hành trình học tập của bạn?</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className={`${stat.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* My Courses */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2>Khóa học của tôi</h2>
                    <a href="#" className="text-purple-600 hover:underline text-sm">
                      Xem tất cả
                    </a>
                  </div>

                  <div className="space-y-4">
                    {myCourses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <ImageWithFallback
                            src={course.image}
                            alt={course.title}
                            className="w-full sm:w-48 h-32 object-cover"
                          />
                          <div className="p-4 flex-1">
                            <h4 className="mb-2 line-clamp-1">{course.title}</h4>
                            <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>

                            <div className="mb-3">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-gray-600">Tiến độ</span>
                                <span className="text-purple-600">{course.progress}%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-purple-600 rounded-full"
                                  style={{ width: `${course.progress}%` }}
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{course.lastAccessed}</span>
                              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm">
                                <Play className="w-4 h-4" />
                                Tiếp tục học
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Weekly Activity */}
                <section className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <h3>Hoạt động tuần này</h3>
                  </div>

                  <div className="flex items-end justify-between gap-2 h-48">
                    {weeklyActivity.map((day, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="flex-1 flex items-end w-full">
                          <div
                            className="w-full bg-purple-500 rounded-t hover:bg-purple-600 transition cursor-pointer"
                            style={{ height: `${(day.hours / 4) * 100}%` }}
                            title={`${day.hours} giờ`}
                          />
                        </div>
                        <div className="text-xs text-gray-600 mt-2">{day.day}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center text-sm text-gray-600">
                    Tổng: 17.5 giờ học trong tuần
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Upcoming Tasks */}
                <section className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <h3>Nhiệm vụ sắp tới</h3>
                  </div>

                  <div className="space-y-3">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm mb-1">{task.title}</p>
                          <p className="text-xs text-gray-500">{task.course}</p>
                          <p className="text-xs text-purple-600 mt-1">{task.dueDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certificates */}
                <section className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <h3>Chứng chỉ</h3>
                  </div>

                  <div className="space-y-3">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="p-4 border-2 border-yellow-400 bg-yellow-50 rounded-lg"
                      >
                        <div className="flex items-start gap-3">
                          <Award className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm mb-1">{cert.title}</h4>
                            <p className="text-xs text-gray-600">{cert.instructor}</p>
                            <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    Xem tất cả chứng chỉ
                  </button>
                </section>

                {/* Learning Streak */}
                <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🔥</div>
                    <h3 className="mb-2">Chuỗi học tập</h3>
                    <div className="text-4xl mb-2">7</div>
                    <p className="text-sm opacity-90 mb-4">ngày liên tục</p>
                    <p className="text-xs opacity-75">
                      Tiếp tục phấn đấu! Mục tiêu: 30 ngày
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
