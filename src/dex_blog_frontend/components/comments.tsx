import { useState } from "react";
import { CommentList } from "./comment-list";
import { CommentForm } from "./comment-form";

export function Comments({ initialComments = [], postId }) {
  const [comments, setComments] = useState(initialComments);

  const handleCommentSubmit = (newComment) => {
    const commentWithId = {
      ...newComment,
      id: Date.now().toString(),
      postId: postId,
      publishedAt: new Date().toISOString(),
    };
    setComments([commentWithId, ...comments]);
    // Here you would typically send the comment to your backend API
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">Comments ({comments.length})</h3>
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
}
