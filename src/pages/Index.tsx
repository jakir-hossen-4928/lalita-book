import { Book } from "@/components/Book";

const Index = () => {
  const chapters = [
    {
      title: "The Beginning",
      content: `Your chapter 1 content goes here...

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    },
    {
      title: "The Journey",
      content: `Your chapter 2 content goes here...

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: "The Challenge",
      content: `Your chapter 3 content goes here...

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
      title: "The Resolution",
      content: `Your chapter 4 content goes here...

      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.`
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