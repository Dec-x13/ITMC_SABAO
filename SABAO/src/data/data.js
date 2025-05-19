const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, nunc at volutpat vehicula, justo nulla hendrerit libero, non maximus eros nisl sed nibh. Proin sodales, risus ac dictum dapibus, justo erat tristique nunc, at consectetur magna nunc nec odio. Sed vestibulum, erat at efficitur dapibus, metus purus malesuada sapien, non bibendum tortor nunc nec metus.

Curabitur non lacus vitae magna fermentum varius. Mauris porttitor est sed elit rhoncus, a dapibus nibh sagittis. Fusce ut consequat sapien, vitae viverra erat. Praesent luctus, sapien non laoreet aliquam, ligula odio cursus tortor, in lobortis nulla ex sed velit. Etiam sit amet justo risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Suspendisse a urna eget ipsum pretium convallis. Vestibulum in ex vel sem bibendum dictum a at nunc. Integer fermentum ante in nibh tristique lobortis. Nulla facilisi. Sed efficitur condimentum ipsum, eu malesuada neque. Proin at erat purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

In a small village nestled between rolling hills, there lived a young wanderer named Lorem. Each dawn, Lorem would rise to greet the whispering winds and the golden hues of the sun as it spilled across the valley. Though the village was humble, it brimmed with tales of ancient magic and forgotten heroes.

One morning, Lorem found a mysterious parchment buried beneath the old oak tree — its edges frayed, its ink faded but still legible. The message spoke of a hidden path through the forest leading to a realm where shadows danced and secrets slumbered. With a heart full of curiosity and courage, Lorem set forth to uncover the truth.

As the journey began, the forest canopy wove a tapestry of light and shadow overhead, the rustle of leaves composing a symphony of nature’s secrets. Lorem moved cautiously yet with determination, aware that the path ahead was as much about discovery as it was about self.

The deeper into the woods, the stranger the world became. Trees twisted into shapes that whispered forgotten songs, and the air shimmered with ethereal energy. At twilight, Lorem reached a clearing where the moonlight pooled like liquid silver. There, an ancient stone altar stood, inscribed with runes that pulsed softly with otherworldly glow.

Touching the altar, Lorem was enveloped in a vision — flashes of battles past, alliances forged, and a destiny intertwined with the fate of many. The journey was no longer just a quest for knowledge but a call to protect what was fragile and sacred.

With renewed purpose, Lorem pressed onward, the night alive with possibility and peril. Each step was a story, every breath a verse in the unfolding saga.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, nunc at volutpat vehicula, justo nulla hendrerit libero, non maximus eros nisl sed nibh. Proin sodales, risus ac dictum dapibus, justo erat tristique nunc, at consectetur magna nunc nec odio. Sed vestibulum, erat at efficitur dapibus, metus purus malesuada sapien, non bibendum tortor nunc nec metus.

Curabitur non lacus vitae magna fermentum varius. Mauris porttitor est sed elit rhoncus, a dapibus nibh sagittis. Fusce ut consequat sapien, vitae viverra erat. Praesent luctus, sapien non laoreet aliquam, ligula odio cursus tortor, in lobortis nulla ex sed velit. Etiam sit amet justo risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Suspendisse a urna eget ipsum pretium convallis. Vestibulum in ex vel sem bibendum dictum a at nunc. Integer fermentum ante in nibh tristique lobortis. Nulla facilisi. Sed efficitur condimentum ipsum, eu malesuada neque. Proin at erat purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

In a small village nestled between rolling hills, there lived a young wanderer named Lorem. Each dawn, Lorem would rise to greet the whispering winds and the golden hues of the sun as it spilled across the valley. Though the village was humble, it brimmed with tales of ancient magic and forgotten heroes.

One morning, Lorem found a mysterious parchment buried beneath the old oak tree — its edges frayed, its ink faded but still legible. The message spoke of a hidden path through the forest leading to a realm where shadows danced and secrets slumbered. With a heart full of curiosity and courage, Lorem set forth to uncover the truth.

As the journey began, the forest canopy wove a tapestry of light and shadow overhead, the rustle of leaves composing a symphony of nature’s secrets. Lorem moved cautiously yet with determination, aware that the path ahead was as much about discovery as it was about self.

The deeper into the woods, the stranger the world became. Trees twisted into shapes that whispered forgotten songs, and the air shimmered with ethereal energy. At twilight, Lorem reached a clearing where the moonlight pooled like liquid silver. There, an ancient stone altar stood, inscribed with runes that pulsed softly with otherworldly glow.

Touching the altar, Lorem was enveloped in a vision — flashes of battles past, alliances forged, and a destiny intertwined with the fate of many. The journey was no longer just a quest for knowledge but a call to protect what was fragile and sacred.

With renewed purpose, Lorem pressed onward, the night alive with possibility and peril. Each step was a story, every breath a verse in the unfolding saga.`
export const books = [
  {
    id: 1,
    title: "A Returner's Magic Should Be Special",
    author: "Dane Joe",
    description: `Now that I'm back, I won't allow my loved ones to die again!

The Shadow Labyrinth - the most catastrophic existence humanity has faced in history.
Desir Arman is one of the six remaining survivors of mankind within it.

The six attempt to clear the final level of the labyrinth but ultimately fail, and the world comes to an end.`,
    coverImage: "/img/beginer.jpg",
    branches:100,
    genres:["Shounen", "Adventure", "Action"],
    chapters: [
      {
        chapterId: 1,
        title: "Chapter 1: The Return",
        author: "Author1",
        date: "2025-01-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "1.1",
            title: "Sub-Chapter 1.1: The Beginning",
            date: "2025-01-05",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "1.2",
            title: "Sub-Chapter 1.2: The Journey",
            date: "2025-01-10",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
        ],
      },
      {
        chapterId: 2,
        title: "Chapter 2: New World",
        author: "Author2",
        date: "2025-01-02",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "2.1",
            title: "Sub-Chapter 2.1: The Awakening",
            date: "2025-01-15",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "2.2",
            title: "Sub-Chapter 2.2: The Conflict",
            date: "2025-01-20",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
        ],
      },
      {
        chapterId: 3,
        title: "Chapter 3: The Escape",
        author: "Author3",
        date: "2025-02-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [],
      },
      {
        chapterId: 4,
        title: "Chapter 4: Into the Abyss",
        author: "Author4",
        date: "2025-02-10",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "4.1",
            title: "Sub-Chapter 4.1: The Dark Realm",
            date: "2025-02-12",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
        ],
      },
      {
        chapterId: 5,
        title: "Chapter 5: The Hero's Rise",
        author: "Author5",
        date: "2025-03-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [],
      },
      {
        chapterId: 6,
        title: "Chapter 6: The Labyrinth",
        author: "Author6",
        date: "2025-03-10",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "6.1",
            title: "Sub-Chapter 6.1: The Entrance",
            date: "2025-03-12",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
          {
            subChapterId: "6.2",
            title: "Sub-Chapter 6.2: The Traps",
            date: "2025-03-15",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "6.3",
            title: "Sub-Chapter 6.3: The Secret Path",
            date: "2025-03-18",
            content: loremIpsum,
            imageUrl: "../../public/img/adjest.jpg",
          },
        ],
      },
      {
        chapterId: 7,
        title: "Chapter 7: The Final Test",
        author: "Author7",
        date: "2025-03-25",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "7.1",
            title: "Sub-Chapter 7.1: The Challenge",
            date: "2025-03-27",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
        ],
      },
      {
        chapterId: 8,
        title: "Chapter 8: The End of Time",
        author: "Author8",
        date: "2025-04-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [],
      },
      {
        chapterId: 9,
        title: "Chapter 9: The Legend Reborn",
        author: "Author9",
        date: "2025-04-05",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "9.1",
            title: "Sub-Chapter 9.1: The Return",
            date: "2025-04-08",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "9.2",
            title: "Sub-Chapter 9.2: The Awakening",
            date: "2025-04-10",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
        ],
      },
      {
        chapterId: 10,
        title: "Chapter 10: The Journey Continues",
        author: "Author10",
        date: "2025-04-12",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [],
      },
    ],
    comments: [
      { user: "Peyronie", text: "I cried at this scene 😭", time: "1 minute ago" },
      { user: "MystR", text: "Best chapter so far!", time: "2 minutes ago" },
      { user: "Critique", text: "Little hard to follow Chapter 3", time: "1 week ago" },
    ],
    suggestions: [
      { title: "Ajani's Bizarre Adventure Part V", chapter: "1000+", image: "/img/jojo.jpg" },
      { title: "The Last Stand of the Earth Kings", chapter: "20", image: "/img/jojo.jpg" },
      { title: "Chronicles of the Eternal Sky", chapter: "15", image: "/img/jojo.jpg" },
      { title: "Rise of the Titans", chapter: "30", image: "/img/jojo.jpg" },
      { title: "The Wanderer's Tale", chapter: "50", image: "/img/jojo.jpg" },
    ],
  },
  {
    id:2,
    title:"One Piece",
    author:"Eiichiro Oda",
    description:`Gol D. Roger, a man referred to as the "Pirate King," is set 
    to be executed by the World Government. 
    But just before his demise, he confirms the existence of a great treasure, One Piece, 
    located somewhere within the vast ocean known as the Grand Line. 
    Announcing that One Piece can be claimed by anyone worthy enough to reach it, 
    the Pirate King is executed and the Great Age of Pirates begins. 
    Twenty-two years later, a young man by the name of Monkey D. Luffy is 
    ready to embark on his own adventure, searching for One Piece and striving 
    to become the new Pirate King. Armed with just a straw hat, a small boat, 
    and an elastic body, he sets out on a fantastic journey to gather his 
    own crew and a worthy ship that will take them across the Grand Line to 
    claim the greatest status on the high seas.`,
    coverImage:"../assets/onepiece.jpg",
    branches:100,
    genre:["Shounen", "Adventure", "Action"]
  }
];
