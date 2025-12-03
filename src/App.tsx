import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { CourseDetailPage } from "./components/CourseDetailPage";
import { LearningPage } from "./components/LearningPage";
import { StudentDashboard } from "./components/StudentDashboard";
import { InstructorDashboard } from "./components/InstructorDashboard";

type Page = "home" | "course-detail" | "learning" | "student-dashboard" | "instructor-dashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Navigation helper (trong thực tế sẽ dùng React Router)
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "course-detail":
        return <CourseDetailPage />;
      case "learning":
        return <LearningPage />;
      case "student-dashboard":
        return <StudentDashboard />;
      case "instructor-dashboard":
        return <InstructorDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Development Navigation Bar - Chỉ để demo, trong production sẽ dùng React Router */}
      <div className="fixed bottom-4 right-4 z-50 bg-white shadow-2xl rounded-lg p-4 border-2 border-purple-600 max-w-xs">
        <p className="text-xs mb-2 text-gray-600">🧭 Demo Navigation (Dev only)</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setCurrentPage("home")}
            className={`text-xs px-3 py-2 rounded text-left ${
              currentPage === "home"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            🏠 Trang chủ
          </button>
          <button
            onClick={() => setCurrentPage("course-detail")}
            className={`text-xs px-3 py-2 rounded text-left ${
              currentPage === "course-detail"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            📚 Chi tiết khóa học
          </button>
          <button
            onClick={() => setCurrentPage("learning")}
            className={`text-xs px-3 py-2 rounded text-left ${
              currentPage === "learning"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            🎓 Trang học bài
          </button>
          <button
            onClick={() => setCurrentPage("student-dashboard")}
            className={`text-xs px-3 py-2 rounded text-left ${
              currentPage === "student-dashboard"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            👨‍🎓 Dashboard học viên
          </button>
          <button
            onClick={() => setCurrentPage("instructor-dashboard")}
            className={`text-xs px-3 py-2 rounded text-left ${
              currentPage === "instructor-dashboard"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            👨‍🏫 Dashboard giảng viên
          </button>
        </div>
      </div>

      {/* Main Content */}
      {renderPage()}
    </div>
  );
}
