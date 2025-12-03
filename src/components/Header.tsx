import { Search, ShoppingCart, Bell, Menu, BookOpen } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onMenuClick?: () => void;
  showCategories?: boolean;
}

export function Header({ onMenuClick, showCategories = true }: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 hover:bg-gray-100 rounded"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            <a href="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-[var(--primary-color)]" />
              <span className="font-bold text-xl hidden sm:block">LearnHub</span>
            </a>

            {showCategories && (
              <button className="hidden lg:block px-3 py-2 hover:text-[var(--primary-color)] transition">
                Danh mục
              </button>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div
              className={`flex items-center bg-gray-50 rounded-full px-4 py-2 border ${
                isSearchFocused ? "border-[var(--primary-color)]" : "border-transparent"
              }`}
            >
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                className="flex-1 bg-transparent px-3 outline-none"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden lg:block px-3 py-2 hover:text-[var(--primary-color)] transition">
              Giảng dạy
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-[var(--primary-color)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
            </button>

            <div className="flex items-center gap-2">
              <button className="hidden sm:block px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                Đăng nhập
              </button>
              <button className="btn-primary">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="flex-1 bg-transparent px-3 outline-none"
          />
        </div>
      </div>
    </header>
  );
}
