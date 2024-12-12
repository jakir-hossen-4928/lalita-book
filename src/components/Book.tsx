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
      const chapterElements = document.querySelectorAll('.chapter-content');
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

  const scrollToChapter = (index: number) => {
    const element = document.getElementById(`chapter-${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="floating-decoration decoration-1" />
      <div className="floating-decoration decoration-2" />

      <div className="progress-bar w-full">
        <div
          className="progress-indicator"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="book-container relative ">
        <h1 className="text-4xl font-bold text-center mb-8 text-accent">
          {title}
        </h1>


        <nav className="mb-12 hidden md:block">
          <ul className="flex justify-center space-x-8 text-sm font-sans text-accent/80">
            {chapters.map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToChapter(index)}
                  className={`transition-colors hover:text-accent relative pb-2 ${activeChapter === index ? 'text-accent font-medium' : ''
                    }`}
                >
                  {activeChapter === index && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent/30 rounded-full" />
                  )}
                  Chapter {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="chapter-navigation">
          {chapters.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToChapter(index)}
              className={`chapter-nav-dot ${activeChapter === index ? 'active' : ''}`}
              aria-label={`Go to chapter ${index + 1}`}
            />
          ))}
        </div>

        {chapters.map((chapter, index) => (
          <div
            key={index}
            id={`chapter-${index + 1}`}
            className="chapter-content"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <h2 className="chapter-heading">Chapter {index + 1} {chapter.title}</h2>
            <div
              className="story-content prose prose-lg max-w-prose mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: chapter.content
                  .split('\n\n')  // Split into paragraphs
                  .map(paragraph =>
                    `<p class="mb-4">${paragraph
                      .split(' ')
                      .map(word =>
                        `<span class="inline-block hover:text-accent/80 transition-colors duration-300">${word}</span>`
                      )
                      .join(' ')
                    }</p>`
                  )
                  .join('')
              }}
            />
          </div>
        ))}
      </main>
    </div>
  );
};