import { useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  Maximize,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Circle,
  Clock,
  FileText,
  Download,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";

export function LearningPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentLesson, setCurrentLesson] = useState(0);

  const curriculum = [
    {
      title: "Giới thiệu về Web Development",
      lessons: [
        { title: "Chào mừng đến với khóa học", duration: "3:25", completed: true },
        { title: "Thiết lập môi trường làm việc", duration: "8:45", completed: true },
        { title: "Cấu trúc của một trang web", duration: "6:30", completed: false },
        { title: "HTML cơ bản", duration: "12:15", completed: false },
      ],
    },
    {
      title: "HTML & CSS từ cơ bản đến nâng cao",
      lessons: [
        { title: "HTML Tags và Attributes", duration: "15:20", completed: false },
        { title: "CSS Selectors và Properties", duration: "18:45", completed: false },
        { title: "Flexbox và Grid Layout", duration: "22:30", completed: false },
      ],
    },
    {
      title: "JavaScript Fundamentals",
      lessons: [
        { title: "Biến và kiểu dữ liệu", duration: "16:40", completed: false },
        { title: "Vòng lặp và điều kiện", duration: "14:25", completed: false },
        { title: "Functions và Scope", duration: "19:15", completed: false },
      ],
    },
  ];

  const notes = [
    { time: "2:15", content: "Nhớ cài đặt extension Live Server" },
    { time: "5:30", content: "Phím tắt Ctrl+/ để comment code" },
  ];

  const resources = [
    { name: "Slide bài giảng.pdf", size: "2.5 MB" },
    { name: "Source code.zip", size: "1.2 MB" },
    { name: "Tài liệu tham khảo.pdf", size: "3.8 MB" },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Top Header */}
      <header className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <a href="/" className="hover:text-purple-400 transition">
            ← Quay lại khóa học
          </a>
        </div>
        <h4 className="flex-1 text-center hidden sm:block truncate px-4">
          Khóa học lập trình Web từ Cơ bản đến Nâng cao
        </h4>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 hidden sm:block">45% hoàn thành</span>
          <div className="w-24 h-2 bg-gray-700 rounded-full hidden sm:block">
            <div className="w-[45%] h-full bg-purple-500 rounded-full" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="bg-black aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  {isPlaying ? (
                    <Pause className="w-12 h-12" />
                  ) : (
                    <Play className="w-12 h-12 ml-2" />
                  )}
                </div>
                <p className="text-gray-400">Video Player Placeholder</p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="mb-2">
                <div className="w-full h-1 bg-gray-600 rounded-full cursor-pointer">
                  <div className="w-1/3 h-full bg-purple-500 rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-purple-400"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <span className="text-sm">5:23 / 15:20</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="hover:text-purple-400">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  <button className="hover:text-purple-400">
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info & Tabs */}
          <div className="bg-white flex-1 overflow-auto">
            <div className="border-b">
              <div className="max-w-5xl mx-auto px-4 py-4">
                <h3 className="mb-2">Thiết lập môi trường làm việc</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8:45
                  </span>
                  <span>Chương 1: Giới thiệu về Web Development</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="max-w-5xl mx-auto px-4">
                <div className="flex gap-6 border-b overflow-x-auto">
                  {["overview", "notes", "resources", "qa"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 whitespace-nowrap border-b-2 transition ${
                        activeTab === tab
                          ? "border-purple-600 text-purple-600"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tab === "overview" && "Tổng quan"}
                      {tab === "notes" && "Ghi chú"}
                      {tab === "resources" && "Tài liệu"}
                      {tab === "qa" && "Hỏi đáp"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-5xl mx-auto px-4 py-6">
              {activeTab === "overview" && (
                <div>
                  <h4 className="mb-3">Mô tả bài học</h4>
                  <p className="text-gray-700 mb-4">
                    Trong bài học này, chúng ta sẽ cùng nhau thiết lập môi trường phát triển web chuyên nghiệp. 
                    Bạn sẽ học cách cài đặt và cấu hình các công cụ cần thiết như Visual Studio Code, 
                    các extension hữu ích, và trình duyệt web developer tools.
                  </p>
                  <p className="text-gray-700">
                    Sau bài học này, bạn sẽ có một môi trường làm việc hoàn chỉnh, sẵn sàng để bắt đầu 
                    viết code và xây dựng các dự án web thực tế.
                  </p>

                  <div className="mt-6 flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                      <ChevronLeft className="w-4 h-4" />
                      Bài trước
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                      Bài tiếp theo
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>Ghi chú của tôi</h4>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                      + Thêm ghi chú
                    </button>
                  </div>

                  <div className="space-y-4">
                    {notes.map((note, index) => (
                      <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-sm text-purple-600">{note.time}</span>
                          <button className="text-gray-400 hover:text-gray-600">×</button>
                        </div>
                        <p className="text-gray-700">{note.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "resources" && (
                <div>
                  <h4 className="mb-4">Tài liệu học tập</h4>
                  <div className="space-y-3">
                    {resources.map((resource, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-purple-600" />
                          <div>
                            <p>{resource.name}</p>
                            <p className="text-sm text-gray-500">{resource.size}</p>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-purple-100 rounded">
                          <Download className="w-5 h-5 text-purple-600" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "qa" && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>Hỏi đáp</h4>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                      Đặt câu hỏi
                    </button>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                    <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">Chưa có câu hỏi nào</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Hãy là người đầu tiên đặt câu hỏi cho bài học này
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Curriculum */}
        <aside
          className={`fixed lg:relative top-0 right-0 h-full bg-white border-l border-gray-200 z-50 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "380px" }}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h4>Nội dung khóa học</h4>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress */}
            <div className="p-4 border-b bg-gray-50">
              <div className="flex items-center justify-between mb-2 text-sm">
                <span>Tiến độ học tập</span>
                <span className="text-purple-600">2/14 bài</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-[14%] h-full bg-purple-600 rounded-full" />
              </div>
            </div>

            {/* Curriculum List */}
            <div className="flex-1 overflow-y-auto">
              {curriculum.map((section, sectionIndex) => (
                <details key={sectionIndex} className="border-b" open={sectionIndex === 0}>
                  <summary className="p-4 cursor-pointer hover:bg-gray-50">
                    <h4 className="text-sm mb-1">{section.title}</h4>
                    <p className="text-xs text-gray-500">{section.lessons.length} bài học</p>
                  </summary>
                  <div>
                    {section.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lessonIndex}
                        onClick={() => setCurrentLesson(lessonIndex)}
                        className={`w-full text-left p-4 border-t hover:bg-purple-50 transition ${
                          currentLesson === lessonIndex && sectionIndex === 0
                            ? "bg-purple-50 border-l-4 border-l-purple-600"
                            : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {lesson.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm mb-1 truncate">{lesson.title}</p>
                            <p className="text-xs text-gray-500">{lesson.duration}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </aside>

        {/* Sidebar Toggle Button (Desktop) */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hidden lg:block fixed right-4 top-20 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 z-40"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
