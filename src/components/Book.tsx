import React, { useEffect, useState } from "react";

interface BookProps {
  title: string;
  content: string;
}

export const Book: React.FC<BookProps> = ({ title, content }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentPosition / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="progress-bar w-full">
        <div 
          className="progress-indicator" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      <main className="book-container">
        <h1 className="chapter-title">{title}</h1>
        <div 
          className="story-content"
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}
        />
      </main>
    </div>
  );
};