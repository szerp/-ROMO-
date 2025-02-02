import { Link } from "react-router-dom";
import { Home, BookOpen, BarChart2, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-primary text-white">
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">
          <Home />
        </Link>
        <Link to="/recipes" className="hover:underline">
          <BookOpen />
        </Link>
        <Link to="/history" className="hover:underline">
          <BarChart2 />
        </Link>
        <Link to="/settings" className="hover:underline">
          <Settings />
        </Link>
      </div>
      {/* Removed UserAvatar and Logout button as authentication is no longer used */}
    </header>
  );
}
