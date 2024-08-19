import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaHome, FaVideo, FaPlayCircle, FaMusic, FaFootballBall, FaGamepad,
  FaFilm, FaBook, FaCalendarDay, FaGlobe, FaTachometerAlt, FaUser
} from 'react-icons/fa';

const Sidebar = () => {
  const isSidebarCompact = useSelector(store => store.app.isSidebarCompact);

  const sidebarWidth = isSidebarCompact ? 'w-16' : 'w-64';
  const sidebarPadding = isSidebarCompact ? 'py-2' : 'py-4'; 

  return (
    <div className={`sticky top-0 p-4 shadow-lg ${sidebarWidth} h-screen overflow-y-auto bg-white dark:bg-gray-800 transition-all duration-300`}>
      <ul className={`space-y-5 ${sidebarPadding}`}>
        <NavItem to="/" icon={<FaHome />} label="Home" isCompact={isSidebarCompact} />
        <NavItem to="/shorts" icon={<FaVideo />} label="Shorts" isCompact={isSidebarCompact} />
        <NavItem to="/videos" icon={<FaPlayCircle />} label="Videos" isCompact={isSidebarCompact} />
        <NavItem to="/live" icon={<FaPlayCircle />} label="Live" isCompact={isSidebarCompact} />
      </ul>

      <SectionTitle title="Subscriptions" isCompact={isSidebarCompact} />

      <ul className={`space-y-5 ${sidebarPadding}`}>
        <NavItem to="/music" icon={<FaMusic />} label="Music" isCompact={isSidebarCompact} />
        <NavItem to="/sports" icon={<FaFootballBall />} label="Sports" isCompact={isSidebarCompact} />
        <NavItem to="/gaming" icon={<FaGamepad />} label="Gaming" isCompact={isSidebarCompact} />
        <NavItem to="/movies" icon={<FaFilm />} label="Movies" isCompact={isSidebarCompact} />
        <NavItem to="/books" icon={<FaBook />} label="Books" isCompact={isSidebarCompact} />
        <NavItem to="/events" icon={<FaCalendarDay />} label="Events" isCompact={isSidebarCompact} />
        <NavItem to="/global" icon={<FaGlobe />} label="Global" isCompact={isSidebarCompact} />
        <NavItem to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" isCompact={isSidebarCompact} />
        <NavItem to="/profile" icon={<FaUser />} label="Profile" isCompact={isSidebarCompact} />
      </ul>

      <SectionTitle title="Watch Later" isCompact={isSidebarCompact} />

      <ul className={`space-y-5 ${sidebarPadding}`}>
        <NavItem to="/watch-later/music" icon={<FaMusic />} label="Music" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/sports" icon={<FaFootballBall />} label="Sports" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/gaming" icon={<FaGamepad />} label="Gaming" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/movies" icon={<FaFilm />} label="Movies" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/books" icon={<FaBook />} label="Books" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/events" icon={<FaCalendarDay />} label="Events" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/global" icon={<FaGlobe />} label="Global" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/dashboard" icon={<FaTachometerAlt />} label="Dashboard" isCompact={isSidebarCompact} />
        <NavItem to="/watch-later/profile" icon={<FaUser />} label="Profile" isCompact={isSidebarCompact} />
      </ul>
    </div>
  );
};

const NavItem = ({ to, icon, label, isCompact }) => (
  <li className={`flex items-center py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ${isCompact ? 'justify-center' : ''}`}>
    <Link to={to} className={`flex items-center ${isCompact ? 'justify-center' : ''}`}>
      <span className={`text-2xl ${isCompact ? 'text-gray-700' : 'text-gray-900'} dark:${isCompact ? 'text-gray-300' : 'text-gray-100'} ${isCompact ? '' : 'mr-4'}`}>
        {icon}
      </span>
      {!isCompact && <span className={`text-base font-medium ${isCompact ? '' : 'text-gray-600'} dark:text-gray-400`}>{label}</span>}
    </Link>
  </li>
);

const SectionTitle = ({ title, isCompact }) => (
  <h1 className={`font-semibold text-gray-600 text-xl pt-4 ${isCompact ? 'hidden' : ''} dark:text-gray-300`}>{title}</h1>
);

export default Sidebar;
