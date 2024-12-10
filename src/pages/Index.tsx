import { Book } from "@/components/Book";

const Index = () => {
  const chapters = [
    {
      title: "The Beginning",
      content: `Your chapter 1 content goes here...

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: "The Journey",
      content: `Your chapter 2 content goes here...

      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
      title: "The Challenge",
      content: `Your chapter 3 content goes here...

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    },
    {
      title: "The Resolution",
      content: `Your chapter 4 content goes here...

      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ];

  return (
    <Book 
      title="Your Story Title"
      chapters={chapters}
    />
  );
};

export default Index;