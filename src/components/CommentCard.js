import React from 'react';

const CommentCard = ({ comment }) => {
  const { snippet } = comment;
  const { topLevelComment } = snippet;
  const { snippet: commentSnippet } = topLevelComment;
  
  return (
    <div className="flex p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <img
        className="h-10 w-10 rounded-full mr-4"
        src={commentSnippet.authorProfileImageUrl}
        alt={commentSnippet.authorDisplayName}
      />
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-100">{commentSnippet.authorDisplayName}</p>
        <p className="text-gray-600 dark:text-gray-300">{commentSnippet.textDisplay}</p>
      </div>
    </div>
  );
};

export default CommentCard;

