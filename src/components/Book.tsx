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
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentPosition / totalHeight) * 100;
      setReadingProgress(progress);

      // Update active chapter based on scroll position
      const chapterElements = document.querySelectorAll('.chapter-card');
      chapterElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveChapter(index);
        }
      });
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-paper to-paper/50">
      <div className="progress-bar w-full">
        <div 
          className="progress-indicator" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      <main className="book-container">
        <h1 className="chapter-title">{title}</h1>
        
        <nav className="mb-12 hidden md:block">
          <ul className="flex justify-center space-x-6 text-sm font-sans text-accent/80">
            {chapters.map((_, index) => (
              <li key={index}>
                <a
                  href={`#chapter-${index + 1}`}
                  className={`transition-colors hover:text-accent ${
                    activeChapter === index ? 'text-accent font-medium' : ''
                  }`}
                >
                  Chapter {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {chapters.map((chapter, index) => (
          <div 
            key={index} 
            id={`chapter-${index + 1}`}
            className="chapter-card"
            style={{ 
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className="decorative-line" />
            <h2 className="chapter-heading">Chapter {index + 1}: {chapter.title}</h2>
            <div 
              className="story-content"
              dangerouslySetInnerHTML={{ 
                __html: chapter.content
                  .replace(/\n/g, '<br/>')
                  .split(' ')
                  .map(word => `<span class="inline-block">${word}</span>`)
                  .join(' ') 
              }}
            />
          </div>
        ))}
      </main>
    </div>
  );
};