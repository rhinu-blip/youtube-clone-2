import React from 'react';
import CommentCard from './CommentCard';

const CommentSection = ({ comments }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div>
        {comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
