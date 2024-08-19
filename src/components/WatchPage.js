import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENTS_API } from '../utils/constants'; 
import CommentSection from './CommentSection'; 

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const videoId = searchParams.get("v");
    if (videoId) {
      const response = await fetch(YOUTUBE_COMMENTS_API(videoId));
      const data = await response.json();
      setComments(data.items || []);
    }
  };

  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentSection comments={comments} />
    </div>
  );
};

export default WatchPage;
