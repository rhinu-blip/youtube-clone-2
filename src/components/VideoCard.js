import React from "react";

const formatViews = (viewCount) => {
    const count = Number(viewCount);
    if (count >= 1_000_000) {
        return (count / 1_000_000).toFixed(1) + 'M';
    } else if (count >= 1_000) {
        return (count / 1_000).toFixed(1) + 'K';
    } else {
        return count;
    }
};

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const formattedViews = statistics ? formatViews(statistics.viewCount) : 'N/A'; 

    return (
        <div className="p-2 m-2 w-72 shadow-lg bg-white dark:bg-gray-800 rounded-lg">
            <img className="rounded-lg w-full" alt="thumbnail" src={thumbnails.medium.url} />
            <ul className="mt-2">
  <li className="font-bold py-2 text-gray-900 dark:text-gray-100 break-words">{title}</li>
  <li className="text-gray-800 dark:text-gray-300 font-medium break-words">{channelTitle}</li>
  <li className="text-gray-700 dark:text-gray-400 break-words">{formattedViews} views</li>
</ul>

        </div>
    );
};

export default VideoCard;
