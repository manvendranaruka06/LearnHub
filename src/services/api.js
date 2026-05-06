export const resources = [
  {
    id: '1',
    title: 'React for Beginners',
    description: 'A comprehensive guide to learning React from scratch. Covers components, state, props, and hooks.',
    category: 'Development',
    url: 'https://react.dev',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Advanced Tailwind CSS Techniques',
    description: 'Learn how to build complex layouts and custom designs using Tailwind CSS utility classes.',
    category: 'Design',
    url: 'https://tailwindcss.com',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Understanding the Fetch API',
    description: 'Deep dive into making HTTP requests in modern JavaScript using the Fetch API.',
    category: 'Development',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'UI/UX Design Principles',
    description: 'Essential principles for creating intuitive and beautiful user interfaces.',
    category: 'Design',
    url: 'https://www.nngroup.com/',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Introduction to Data Science',
    description: 'Get started with data analysis, visualization, and basic machine learning concepts.',
    category: 'Data',
    url: 'https://www.kaggle.com/learn',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Mastering Git and GitHub',
    description: 'Learn version control basics, branching strategies, and collaboration workflows.',
    category: 'Productivity',
    url: 'https://docs.github.com/',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop'
  }
];

export const getResources = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resources);
    }, 800); // Simulate network latency
  });
};

export const getResourceById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resources.find((r) => r.id === id) || null);
    }, 500);
  });
};
