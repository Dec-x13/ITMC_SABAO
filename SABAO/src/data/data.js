// src/data/data.js
export const book = {
  title: "A Returner's Magic Should Be Special",
  author: "Dane Joe",
  description: 
    `Now that I'm back, I won't allow my loved ones to die again!
    
    The Shadow Labyrinth - the most catastrophic existence humanity has faced in history.
    Desir Arman is one of the six remaining survivors of mankind within it.
    
    The six attempt to clear the final level of the labyrinth but ultimately fail, and the world comes to an end.`,
  coverImage: "/img/beginer.jpg",  // Corrected path
};

// src/data/data.js
export const chapters = [
  { 
    title: "Chapter 1: The Return", 
    author: "Author1", 
    date: "2025-01-01", 
    subChapters: [
      { title: "Sub-Chapter 1.1: The Beginning", date: "2025-01-05" },
      { title: "Sub-Chapter 1.2: The Journey", date: "2025-01-10" }
    ]
  },
  { 
    title: "Chapter 2: New World", 
    author: "Author2", 
    date: "2025-01-02", 
    subChapters: [
      { title: "Sub-Chapter 2.1: The Awakening", date: "2025-01-15" },
      { title: "Sub-Chapter 2.2: The Conflict", date: "2025-01-20" }
    ]
  },
  { 
    title: "Chapter 3: The Escape", 
    author: "Author3", 
    date: "2025-02-01", 
    subChapters: []  // No sub-chapters
  },
  { 
    title: "Chapter 4: Into the Abyss", 
    author: "Author4", 
    date: "2025-02-10", 
    subChapters: [
      { title: "Sub-Chapter 4.1: The Dark Realm", date: "2025-02-12" }
    ]
  },
  { 
    title: "Chapter 5: The Hero's Rise", 
    author: "Author5", 
    date: "2025-03-01", 
    subChapters: []  // No sub-chapters
  },
  { 
    title: "Chapter 6: The Labyrinth", 
    author: "Author6", 
    date: "2025-03-10", 
    subChapters: [
      { title: "Sub-Chapter 6.1: The Entrance", date: "2025-03-12" },
      { title: "Sub-Chapter 6.2: The Traps", date: "2025-03-15" },
      { title: "Sub-Chapter 6.3: The Secret Path", date: "2025-03-18" }
    ]
  },
  { 
    title: "Chapter 7: The Final Test", 
    author: "Author7", 
    date: "2025-03-25", 
    subChapters: [
      { title: "Sub-Chapter 7.1: The Challenge", date: "2025-03-27" }
    ]
  },
  { 
    title: "Chapter 8: The End of Time", 
    author: "Author8", 
    date: "2025-04-01", 
    subChapters: []  // No sub-chapters
  },
  { 
    title: "Chapter 9: The Legend Reborn", 
    author: "Author9", 
    date: "2025-04-05", 
    subChapters: [
      { title: "Sub-Chapter 9.1: The Return", date: "2025-04-08" },
      { title: "Sub-Chapter 9.2: The Awakening", date: "2025-04-10" }
    ]
  },
  { 
    title: "Chapter 10: The Journey Continues", 
    author: "Author10", 
    date: "2025-04-12", 
    subChapters: []  // No sub-chapters
  }
];


export const comments = [
  { user: "Peyronie", text: "I cried at this scene 😭", time: "1 minute ago" },
  { user: "MystR", text: "Best chapter so far!", time: "2 minutes ago" },
  { user: "Critique", text: "Little hard to follow Chapter 3", time: "1 week ago" },
];

export const suggestions = [
  { title: "Ajani's Bizarre Adventure Part V", chapter: "1000+", image: "/img/jojo.jpg" },
  { title: "The Last Stand of the Earth Kings", chapter: "20", image: "/img/jojo.jpg" },
  { title: "Chronicles of the Eternal Sky", chapter: "15", image: "/img/jojo.jpg" },
  { title: "Rise of the Titans", chapter: "30", image: "/img/jojo.jpg" },
  { title: "The Wanderer's Tale", chapter: "50", image: "/img/jojo.jpg" },
  // more suggestions...
];

