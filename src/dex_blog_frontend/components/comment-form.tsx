import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export function CommentForm({ onSubmit }) {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authorName && content) {
      onSubmit({ authorName, content });
      setAuthorName("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Your Name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        required
      />
      <Textarea
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Button type="submit">Post Comment</Button>
    </form>
  );
}
