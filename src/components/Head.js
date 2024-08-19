import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleMenu, toggleSidebarCompact } from '../utils/appSlice';
import { FaMicrophone, FaVideo, FaBell, FaSearch } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle'; 

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]); 
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreateVideoModal, setShowCreateVideoModal] = useState(false);
  const [showMicrophoneModal, setShowMicrophoneModal] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [activeButton, setActiveButton] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const microphoneRef = useRef(null);
  const createVideoRef = useRef(null);
  const notificationsRef = useRef(null);
  
  const mockSuggestions = [
    "How to create a YouTube channel",
    "Bollywood Movies",
    "Best practices for YouTube SEO",
    "Cooking Videos",
    "Top 10 YouTube video ideas",
    "YouTube algorithm explained",
    "How to grow your YouTube audience",
    "React",
    "Comedy Videos",
    "Telugu Songs",
  ];

  
  const handleToggleSidebarCompact = () => {
    dispatch(toggleSidebarCompact());
  };

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const handleUserIconClick = () => {
    setShowSignupPopup(true);
  };

  const closeSignupPopup = () => {
    setShowSignupPopup(false);
  };

  const handleMicrophoneClick = (e) => {
    const rect = microphoneRef.current.getBoundingClientRect();
    setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setActiveButton('microphone');
    setShowMicrophoneModal(true);
  };

  const handleCreateVideoClick = (e) => {
    const rect = createVideoRef.current.getBoundingClientRect();
    setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setActiveButton('createVideo');
    setShowCreateVideoModal(true);
  };

  const handleNotificationsClick = (e) => {
    const rect = notificationsRef.current.getBoundingClientRect();
    setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setActiveButton('notifications');
    setShowNotifications(!showNotifications);
  };

  const closeMicrophoneModal = () => {
    setShowMicrophoneModal(false);
    setActiveButton(null);
  };

  const closeCreateVideoModal = () => {
    setShowCreateVideoModal(false);
    setActiveButton(null);
  };

  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

   
    if (query) {
      setSuggestions(mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      ));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    handleSearch(suggestion);
  };
  return (
    <div className="relative flex items-center p-4 shadow-lg bg-white dark:bg-gray-900">
      {/* Hamburger Menu */}
      <img
        onClick={handleToggleSidebarCompact}
        className="h-8 cursor-pointer"
        alt="menu"
        src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
      />

      {/* YouTube Logo */}
      <a href="/" className="mx-4 flex-shrink-0">
        <img
          className="h-12"  
          alt="youtube-logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
        />
      </a>

      {/* Centered Search Bar */}
      <div className="flex-grow flex justify-center relative">
        <div className="flex items-center w-full max-w-xl relative">
          <input
            className="w-full border border-gray-300 p-2 rounded-l-full text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <button 
            className="border border-gray-300 px-4 py-2 rounded-r-full bg-gray-100 text-sm dark:bg-gray-700 dark:border-gray-600"
            onMouseEnter={() => setTooltip('search')}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleSearch(searchQuery)}
          >
            <FaSearch className="text-lg" />
            {tooltip === 'search' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Search
              </div>
            )}
          </button>
          <button 
            onClick={handleMicrophoneClick} 
            ref={microphoneRef}
            className={`ml-2 p-2 border border-gray-300 rounded-full flex items-center relative ${activeButton === 'microphone' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
            onMouseEnter={() => setTooltip('microphone')}
            onMouseLeave={() => setTooltip(null)}
          >
            <FaMicrophone className="text-lg dark:text-white" />
            {tooltip === 'microphone' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                Voice Search
              </div>
            )}
          </button>
          {/* Search Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full max-w-xl bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded-b-lg mt-1 shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle className="mr-4" /> 

      {/* Spacing to push icons to the right */}
      <div className="ml-auto flex items-center space-x-4"> 
        {/* Create Button */}
        <button 
          onClick={handleCreateVideoClick}
          ref={createVideoRef}
          className={`p-2 border border-gray-300 rounded-full text-xs relative ${activeButton === 'createVideo' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
          onMouseEnter={() => setTooltip('createVideo')}
          onMouseLeave={() => setTooltip(null)}
        >
          <FaVideo className="text-lg dark:text-white" />
          {tooltip === 'createVideo' && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
              Create Video
            </div>
          )}
        </button>

        {/* Notifications */}
        <button 
          onClick={handleNotificationsClick}
          ref={notificationsRef}
          className={`p-2 border border-gray-300 rounded-full text-xs relative ${activeButton === 'notifications' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
          onMouseEnter={() => setTooltip('notifications')}
          onMouseLeave={() => setTooltip(null)}
        >
          <FaBell className="text-lg dark:text-white" />
          {tooltip === 'notifications' && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
              Notifications
            </div>
          )}
        </button>

        {/* User Icon */}
        <div 
          className="relative"
          onMouseEnter={() => setTooltip('user')}
          onMouseLeave={() => setTooltip(null)}
        >
          <img
            onClick={handleUserIconClick}
            className="h-8 cursor-pointer"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
          {tooltip === 'user' && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              User
            </div>
          )}
        </div>
      </div>
      {/* Signup Popup */}
      {showSignupPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative dark:bg-gray-800">
            <button
              onClick={closeSignupPopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form>
              <label className="block mb-2">
                <span className="block text-sm font-medium mb-1">Email</span>
                <input type="email" className="border border-gray-300 p-2 rounded w-full dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
              </label>
              <label className="block mb-4">
                <span className="block text-sm font-medium mb-1">Password</span>
                <input type="password" className="border border-gray-300 p-2 rounded w-full dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
              </label>
              <button type="submit" className="bg-red-600 text-white p-2 rounded w-full">Sign Up</button>
            </form>
          </div>
        </div>
      )}

      {/* Microphone Modal */}
      {showMicrophoneModal && (
        <div className="fixed bg-black bg-opacity-60 z-50" style={{ top: popupPosition.top, left: popupPosition.left, transform: 'translate(-50%, 0)' }}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative dark:bg-gray-800">
            <button
              onClick={closeMicrophoneModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Voice Search</h2>
            <p className="text-gray-700 dark:text-gray-400">Here you can perform voice search.</p>
          </div>
        </div>
      )}

      {/* Create Video Modal */}
      {showCreateVideoModal && (
        <div className="fixed bg-black bg-opacity-60 z-50" style={{ top: popupPosition.top, left: popupPosition.left, transform: 'translate(-50%, 0)' }}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative dark:bg-gray-800">
            <button
              onClick={closeCreateVideoModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Create a Video</h2>
            <p className="text-gray-700 dark:text-gray-400">Here you can create a new video.</p>
          </div>
        </div>
      )}

      {/* Notifications Popup */}
      {showNotifications && (
        <div className="fixed bg-black bg-opacity-60 z-50" style={{ top: popupPosition.top, left: popupPosition.left, transform: 'translate(-50%, 0)' }}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative dark:bg-gray-800">
            <button
              onClick={() => setShowNotifications(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <p className="text-gray-700 dark:text-gray-400">You have no new notifications.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Head;
