import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import { YOUTUBE_SEARCH_API } from '../utils/constants'; 

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      fetchVideos();
    }
  }, [query]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API(query));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="flex flex-wrap">
        {videos.length > 0 ? (
          videos.map((video) => (
            <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
              <VideoCard info={video} />
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
