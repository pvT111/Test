import { BookOpen, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-white" />
              <span className="font-bold text-xl text-white">LearnHub</span>
            </div>
            <p className="text-sm mb-4">
              Nền tảng học trực tuyến hàng đầu với hàng nghìn khóa học chất lượng cao.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Về chúng tôi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white transition">Liên hệ</a></li>
              <li><a href="#" className="hover:text-white transition">Nghề nghiệp</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="hover:text-white transition">Điều khoản</a></li>
              <li><a href="#" className="hover:text-white transition">Chính sách</a></li>
              <li><a href="#" className="hover:text-white transition">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white mb-4">Cộng đồng</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Diễn đàn</a></li>
              <li><a href="#" className="hover:text-white transition">Sự kiện</a></li>
              <li><a href="#" className="hover:text-white transition">Affiliate</a></li>
              <li><a href="#" className="hover:text-white transition">Đối tác</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
