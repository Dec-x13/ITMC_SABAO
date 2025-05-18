// src/data/data.js

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
    chapters: [
      {
        chapterId: 1,
        title: "Chapter 1: The Return",
        author: "Author1",
        date: "2025-01-01",
        content: "This is the chapter text for Chapter 1: The Return. It introduces the story and characters.",
        imageUrl: "/images/chapter1-illustration.jpg",
        subChapters: [
          {
            subChapterId: "1.1",
            title: "Sub-Chapter 1.1: The Beginning",
            date: "2025-01-05",
            content: "Content for Sub-Chapter 1.1: The Beginning. It starts with the protagonist's awakening.",
            imageUrl: "/images/subchapter1-1.jpg",
          },
          {
            subChapterId: "1.2",
            title: "Sub-Chapter 1.2: The Journey",
            date: "2025-01-10",
            content: "Content for Sub-Chapter 1.2: The Journey. The adventure truly begins.",
            imageUrl: "/images/subchapter1-2.jpg",
          },
        ],
      },
      {
        chapterId: 2,
        title: "Chapter 2: New World",
        author: "Author2",
        date: "2025-01-02",
        content: "Content of Chapter 2: New World. The new challenges and environments are introduced.",
        imageUrl: "/images/chapter2-illustration.jpg",
        subChapters: [
          {
            subChapterId: "2.1",
            title: "Sub-Chapter 2.1: The Awakening",
            date: "2025-01-15",
            content: "Content for Sub-Chapter 2.1: The Awakening. The protagonist realizes their potential.",
            imageUrl: "/images/subchapter2-1.jpg",
          },
          {
            subChapterId: "2.2",
            title: "Sub-Chapter 2.2: The Conflict",
            date: "2025-01-20",
            content: "Content for Sub-Chapter 2.2: The Conflict. The first real threat appears.",
            imageUrl: "/images/subchapter2-2.jpg",
          },
        ],
      },
      {
        chapterId: 3,
        title: "Chapter 3: The Escape",
        author: "Author3",
        date: "2025-02-01",
        content: "Content for Chapter 3: The Escape. The characters try to flee danger.",
        imageUrl: "/images/chapter3-illustration.jpg",
        subChapters: [], // No subchapters
      },
      {
        chapterId: 4,
        title: "Chapter 4: Into the Abyss",
        author: "Author4",
        date: "2025-02-10",
        content: "Content for Chapter 4: Into the Abyss. The story takes a darker turn.",
        imageUrl: "/images/chapter4-illustration.jpg",
        subChapters: [
          {
            subChapterId: "4.1",
            title: "Sub-Chapter 4.1: The Dark Realm",
            date: "2025-02-12",
            content: "Content for Sub-Chapter 4.1: The Dark Realm. A mysterious and dangerous place is explored.",
            imageUrl: "/images/subchapter4-1.jpg",
          },
        ],
      },
      {
        chapterId: 5,
        title: "Chapter 5: The Hero's Rise",
        author: "Author5",
        date: "2025-03-01",
        content: "Content for Chapter 5: The Hero's Rise. The protagonist grows stronger and more confident.",
        imageUrl: "/images/chapter5-illustration.jpg",
        subChapters: [], // No subchapters
      },
      {
        chapterId: 6,
        title: "Chapter 6: The Labyrinth",
        author: "Author6",
        date: "2025-03-10",
        content: "Content for Chapter 6: The Labyrinth. The characters navigate treacherous paths.",
        imageUrl: "/images/chapter6-illustration.jpg",
        subChapters: [
          {
            subChapterId: "6.1",
            title: "Sub-Chapter 6.1: The Entrance",
            date: "2025-03-12",
            content: "Content for Sub-Chapter 6.1: The Entrance. The group enters the labyrinth.",
            imageUrl: "/images/subchapter6-1.jpg",
          },
          {
            subChapterId: "6.2",
            title: "Sub-Chapter 6.2: The Traps",
            date: "2025-03-15",
            content: "Content for Sub-Chapter 6.2: The Traps. They encounter deadly traps.",
            imageUrl: "/images/subchapter6-2.jpg",
          },
          {
            subChapterId: "6.3",
            title: "Sub-Chapter 6.3: The Secret Path",
            date: "2025-03-18",
            content: "Content for Sub-Chapter 6.3: The Secret Path. A hidden route is discovered.",
            imageUrl: "/images/subchapter6-3.jpg",
          },
        ],
      },
      {
        chapterId: 7,
        title: "Chapter 7: The Final Test",
        author: "Author7",
        date: "2025-03-25",
        content: "Content for Chapter 7: The Final Test. The climax of their trials.",
        imageUrl: "/images/chapter7-illustration.jpg",
        subChapters: [
          {
            subChapterId: "7.1",
            title: "Sub-Chapter 7.1: The Challenge",
            date: "2025-03-27",
            content: "Content for Sub-Chapter 7.1: The Challenge. The final obstacle before victory.",
            imageUrl: "/images/subchapter7-1.jpg",
          },
        ],
      },
      {
        chapterId: 8,
        title: "Chapter 8: The End of Time",
        author: "Author8",
        date: "2025-04-01",
        content: "Content for Chapter 8: The End of Time. The world faces its final moments.",
        imageUrl: "/images/chapter8-illustration.jpg",
        subChapters: [], // No subchapters
      },
      {
        chapterId: 9,
        title: "Chapter 9: The Legend Reborn",
        author: "Author9",
        date: "2025-04-05",
        content: "Content for Chapter 9: The Legend Reborn. A new legend begins.",
        imageUrl: "/images/chapter9-illustration.jpg",
        subChapters: [
          {
            subChapterId: "9.1",
            title: "Sub-Chapter 9.1: The Return",
            date: "2025-04-08",
            content: "Content for Sub-Chapter 9.1: The Return. Past heroes return.",
            imageUrl: "/images/subchapter9-1.jpg",
          },
          {
            subChapterId: "9.2",
            title: "Sub-Chapter 9.2: The Awakening",
            date: "2025-04-10",
            content: "Content for Sub-Chapter 9.2: The Awakening. New powers awaken.",
            imageUrl: "/images/subchapter9-2.jpg",
          },
        ],
      },
      {
        chapterId: 10,
        title: "Chapter 10: The Journey Continues",
        author: "Author10",
        date: "2025-04-12",
        content: "Content for Chapter 10: The Journey Continues. The adventure is not over.",
        imageUrl: "/images/chapter10-illustration.jpg",
        subChapters: [], // No subchapters
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

  // You can add more books in the same format here...
];
