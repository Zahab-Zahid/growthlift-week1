import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-800 border-b border-gray-700">

      <h2 className="text-2xl font-bold text-green-400">
        GrowthLift
      </h2>

      <nav className="flex gap-6">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-300 hover:text-green-400 transition-colors"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-300 hover:text-green-400 transition-colors"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-300 hover:text-green-400 transition-colors"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-300 hover:text-green-400 transition-colors"
          }
        >
          Contact
        </NavLink>

      </nav>

    </header>
  );
}

export default Header;