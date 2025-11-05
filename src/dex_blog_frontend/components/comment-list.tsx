import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

export function CommentList({ comments }) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={`https://i.pravatar.cc/150?u=${comment.authorName}`} />
            <AvatarFallback>{comment.authorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{comment.authorName}</p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(comment.publishedAt), { addSuffix: true })}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
