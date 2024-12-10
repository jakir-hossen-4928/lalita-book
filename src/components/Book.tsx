import React, { useEffect, useState } from "react";

interface Chapter {
  title: string;
  content: string;
}

interface BookProps {
  title: string;
  chapters: Chapter[];
}

export const Book: React.FC<BookProps> = ({ title, chapters }) => {
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
        {chapters.map((chapter, index) => (
          <div key={index} className="mb-16">
            <h2 className="chapter-heading">Chapter {index + 1}: {chapter.title}</h2>
            <div 
              className="story-content"
              dangerouslySetInnerHTML={{ __html: chapter.content.replace(/\n/g, '<br/>') }}
            />
          </div>
        ))}
      </main>
    </div>
  );
};