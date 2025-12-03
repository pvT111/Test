import { Home, BookOpen, Video, Award, Clock, Heart, Settings, LogOut, X } from "lucide-react";
import { ReactNode } from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  activeItem?: string;
}

interface MenuItem {
  icon: ReactNode;
  label: string;
  href: string;
  badge?: string;
}

export function Sidebar({ isOpen = true, onClose, activeItem = "dashboard" }: SidebarProps) {
  const menuItems: MenuItem[] = [
    { icon: <Home className="w-5 h-5" />, label: "Trang chủ", href: "#home" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Khóa học của tôi", href: "#my-courses", badge: "12" },
    { icon: <Video className="w-5 h-5" />, label: "Đang học", href: "#learning" },
    { icon: <Clock className="w-5 h-5" />, label: "Lịch sử", href: "#history" },
    { icon: <Heart className="w-5 h-5" />, label: "Yêu thích", href: "#favorites" },
    { icon: <Award className="w-5 h-5" />, label: "Chứng chỉ", href: "#certificates", badge: "3" },
  ];

  const settingsItems: MenuItem[] = [
    { icon: <Settings className="w-5 h-5" />, label: "Cài đặt", href: "#settings" },
    { icon: <LogOut className="w-5 h-5" />, label: "Đăng xuất", href: "#logout" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ width: "280px" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg">Menu</h3>
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-2 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* User Profile */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                NV
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate">Nguyễn Văn A</p>
                <p className="text-sm text-gray-500">Học viên</p>
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition ${
                    activeItem === item.href.slice(1)
                      ? "bg-purple-50 text-[var(--primary-color)]"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-purple-100 text-[var(--primary-color)] text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Settings Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-1">
              {settingsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
