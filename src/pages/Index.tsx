import { Book } from "@/components/Book";

const Index = () => {
  const chapters = [
    {
      title: "The Awakening",
      content: `In the soft glow of dawn, Sarah opened her eyes to a world transformed. The familiar contours of her bedroom seemed different somehow, as if painted with new colors she had never noticed before. The air itself felt charged with possibility.

      She sat up slowly, her fingers trailing across the silk sheets that whispered secrets of the night before. Something had changed – not in the physical realm, but deep within her consciousness. The dreams that had visited her during the night still lingered like morning mist.

      "Today will be different," she whispered to herself, and for the first time in years, she truly believed it.`
    },
    {
      title: "The Discovery",
      content: `The library stood before her, its ancient facade holding countless untold stories. Sarah's footsteps echoed through the marble halls as she made her way to the restricted section. Her heart pounded with each step, knowing that what she sought lay hidden among these dusty tomes.

      The manuscript, when she finally found it, seemed to pulse with its own inner light. Its pages were filled with writings in a language she had never seen before, yet somehow understood perfectly. The words seemed to dance before her eyes, rearranging themselves into patterns that spoke directly to her soul.

      As she read deeper into the mysterious text, she began to understand why she had been chosen.`
    },
    {
      title: "The Transformation",
      content: `The changes began subtly at first – a heightened awareness of the world around her, colors becoming more vivid, sounds more crystalline. Sarah could feel the vibrations of the earth beneath her feet, the whispers of the wind carrying messages from distant places.

      Her newfound abilities both thrilled and terrified her. Objects would move at her mere thought, and sometimes, in moments of deep concentration, she could glimpse fragments of possible futures branching out before her like a great, cosmic tree.

      "With great power comes great responsibility," the old saying went. But no one had ever mentioned the profound loneliness that accompanied such gifts.`
    },
    {
      title: "The Choice",
      content: `The moment of decision arrived on a stormy night, when the barriers between worlds grew thin. Lightning split the sky as Sarah stood at the crossroads, both literally and metaphorically. Two paths lay before her, each leading to vastly different destinies.

      One path offered safety, normalcy, and the comfort of the familiar. The other promised adventure, power, and the unknown. The rain soaked through her clothes as she contemplated her choice, knowing that once made, there would be no turning back.

      In the end, it wasn't really a choice at all. It was a calling.`
    }
  ];

  return (
    <Book 
      title="The Chronicles of Awakening"
      chapters={chapters}
    />
  );
};

export default Index;