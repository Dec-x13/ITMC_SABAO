const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, nunc at volutpat vehicula, justo nulla hendrerit libero, non maximus eros nisl sed nibh. Proin sodales, risus ac dictum dapibus, justo erat tristique nunc, at consectetur magna nunc nec odio. Sed vestibulum, erat at efficitur dapibus, metus purus malesuada sapien, non bibendum tortor nunc nec metus.

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
    datePublished: "2025-01-01",
    genres: ["Fantasy", "Adventure", "Magic"],
    chapters: [
      {
        chapterId: 1,
        title: "Chapter 1: The Return",
        author: "Dane Joe",
        reason: "Main storyline by original author",
        date: "2025-01-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "1.1",
            title: "The Return (Main Storyline)",
            author: "Dane Joe",
            reason: "Original main story by author",
            date: "2025-01-01",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "1.2",
            title: "The Return (Alternate Reality)",
            author: "Contributor B",
            reason: "Alternate version exploring a different reality",
            date: "2025-01-05",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
          {
            subChapterId: "1.3",
            title: "The Return (Expanded Timeline)",
            author: "Contributor C",
            reason: "Expansion of timeline events",
            date: "2025-01-10",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (4).jpg",
          },
        ],
      },
      {
        chapterId: 2,
        title: "Chapter 2: New World",
        author: "Dane Joe",
        reason: "Main storyline continuation",
        date: "2025-01-02",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "2.1",
            title: "New World Awakening (Main Storyline)",
            author: "Dane Joe",
            reason: "Original main story continuation",
            date: "2025-01-02",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "2.2",
            title: "New World Awakening (Alternate Reality)",
            author: "Contributor D",
            reason: "Alternate reality exploring different outcome",
            date: "2025-01-15",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
        ],
      },
      {
        chapterId: 3,
        title: "Chapter 3: The Escape",
        author: "Dane Joe",
        reason: "Main storyline progression",
        date: "2025-02-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [], // No subchapters here
      },
      {
        chapterId: 4,
        title: "Chapter 4: Into the Abyss",
        author: "Dane Joe",
        reason: "Main storyline progression",
        date: "2025-02-10",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        // Removed subChapters due to only one subchapter
      },
      {
        chapterId: 5,
        title: "Chapter 5: The Hero's Rise",
        author: "Dane Joe",
        reason: "Main storyline progression",
        date: "2025-03-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [],
      },
      {
        chapterId: 6,
        title: "Chapter 6: The Labyrinth",
        author: "Dane Joe",
        reason: "Main storyline progression",
        date: "2025-03-10",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "6.1",
            title: "The Labyrinth Entrance (Main Storyline)",
            author: "Dane Joe",
            reason: "Original main story about labyrinth entrance",
            date: "2025-03-12",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
          {
            subChapterId: "6.2",
            title: "The Labyrinth Entrance (Alternate Reality)",
            author: "Contributor E",
            reason: "Alternate reality of labyrinth entrance",
            date: "2025-03-15",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "6.3",
            title: "The Labyrinth Entrance (Expanded Timeline)",
            author: "Contributor F",
            reason: "Expansion on labyrinth entrance events",
            date: "2025-03-18",
            content: loremIpsum,
            imageUrl: "../../public/img/adjest.jpg",
          },
        ],
      },
      {
        chapterId: 7,
        title: "Chapter 7: The Final Test",
        author: "Dane Joe",
        reason: "Main storyline climax",
        date: "2025-03-25",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        // Removed subChapters due to only one subchapter
      },
      {
        chapterId: 8,
        title: "Chapter 8: The End of Time",
        author: "Dane Joe",
        reason: "Main storyline conclusion",
        date: "2025-04-01",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [],
      },
      {
        chapterId: 9,
        title: "Chapter 9: The Legend Reborn",
        author: "Dane Joe",
        reason: "New arc beginning",
        date: "2025-04-05",
        content: loremIpsum,
        imageUrl: "../../public/img/adjest.jpg",
        subChapters: [
          {
            subChapterId: "9.1",
            title: "The Legend Reborn (Main Storyline)",
            author: "Dane Joe",
            reason: "Original main story continuation",
            date: "2025-04-08",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (3).jpg",
          },
          {
            subChapterId: "9.2",
            title: "The Legend Reborn (Alternate Reality)",
            author: "Contributor G",
            reason: "Alternate version exploring a different reality",
            date: "2025-04-10",
            content: loremIpsum,
            imageUrl: "../../public/img/COVER (2).jpg",
          },
        ],
      },
      {
        chapterId: 10,
        title: "Chapter 10: The Journey Continues",
        author: "Dane Joe",
        reason: "Ongoing journey",
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
    id: 2,
    title: "One PIece",
    author: "Eiichiro Oda",
    description: `Gol D. Roger, a man referred to as the "Pirate King," is set to be executed 
    by the World Government. But just before his demise, he confirms the existence of a great 
    treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. 
    Announcing that One Piece can be claimed by anyone worthy enough to reach it, 
    the Pirate King is executed and the Great Age of Pirates begins.`,
    coverImage: "/src/assets/onepiece.jpg",
    datePublished: "2025-02-02",
    genres: ["Shounen", "Adventure", "Action"],
  },
  {
    id: 3,
    title: "Jojo's Bizarre Adventure Part 7",
    author: "Dingdong Dantes",
    description: `Johnny Joestar, a young former horse racer unable to walk, 
    travels to San Diego to bear witness to the commencement of the Steel Ball Run. 
    There Johnny meets Gyro Zeppeli, a competitor sporting steel balls in lieu of a firearm. 
    Amid a duel, Johnny observes Gyro using his steel ball to convey an extraordinary power, 
    coercing a man to shoot himself. In an unexpected turn of events, Johnny touches 
    the steel ball and senses a strength pulsating through his legs, enabling him to rise 
    for the first time in two years. Determined to unravel the enigma behind the steel 
    balls, Johnny resolves to partake in the race, initiating his extraordinary adventure 
    throughout America on the Steel Ball Run.`,
    coverImage: "/src/assets/jojopart7.jpg",
    datePublished: "2025-03-03",
    genres: ["Fantasy", "Adventure", "Action"],
  }
];
