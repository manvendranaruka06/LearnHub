export const roadmaps = {
  react: {
    id: 'react',
    title: 'React.js Mastery',
    description: 'Master modern React from fundamentals to advanced state management and hooks.',
    icon: 'Code2',
    color: 'blue',
    steps: [
      { id: 'react-1', title: 'HTML & CSS Foundations', query: 'HTML CSS basics for React beginners', description: 'Understand the building blocks of the web.' },
      { id: 'react-2', title: 'JavaScript ES6+', query: 'JavaScript ES6 crash course modern JS', description: 'Arrow functions, destructuring, map, filter, promises.' },
      { id: 'react-3', title: 'React Fundamentals', query: 'React.js basics components props state', description: 'JSX, Components, Props, and basic State.' },
      { id: 'react-4', title: 'React Hooks', query: 'React Hooks useState useEffect custom hooks', description: 'Master useState, useEffect, and custom hooks.' },
      { id: 'react-5', title: 'Routing & State Management', query: 'React Router DOM Context API Redux tutorial', description: 'React Router, Context API, and global state.' },
      { id: 'react-6', title: 'Next.js & Full-stack', query: 'Next.js 14 app router beginner tutorial', description: 'Take your React skills to the server with Next.js.' },
    ]
  },
  dsa: {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Crack coding interviews by mastering data structures and algorithmic problem solving.',
    icon: 'Binary',
    color: 'emerald',
    steps: [
      { id: 'dsa-1', title: 'Time & Space Complexity', query: 'Big O notation time and space complexity explained', description: 'Understand Big O notation and algorithm efficiency.' },
      { id: 'dsa-2', title: 'Arrays & Strings', query: 'Arrays and Strings Data Structures algorithms', description: 'Two pointers, sliding window, and string manipulation.' },
      { id: 'dsa-3', title: 'Linked Lists', query: 'Linked List Data Structure tutorial', description: 'Singly, doubly linked lists, and slow/fast pointers.' },
      { id: 'dsa-4', title: 'Trees & Graphs', query: 'Binary Trees and Graphs algorithms DFS BFS', description: 'Binary trees, BSTs, DFS, and BFS traversal.' },
      { id: 'dsa-5', title: 'Dynamic Programming', query: 'Dynamic programming complete tutorial beginners', description: 'Memoization, tabulation, and standard DP problems.' },
    ]
  },
  node: {
    id: 'node',
    title: 'Node.js Backend Developer',
    description: 'Learn to build robust, scalable REST APIs using Node.js, Express, and MongoDB.',
    icon: 'Server',
    color: 'green',
    steps: [
      { id: 'node-1', title: 'Node.js Basics', query: 'Node.js basics tutorial for beginners', description: 'Event loop, modules, and file system.' },
      { id: 'node-2', title: 'Express.js Fundamentals', query: 'Express.js crash course REST API', description: 'Routing, middleware, and handling requests.' },
      { id: 'node-3', title: 'MongoDB & Mongoose', query: 'MongoDB Mongoose tutorial Node.js', description: 'NoSQL databases, schemas, and models.' },
      { id: 'node-4', title: 'Authentication & Security', query: 'Node.js JWT authentication bcrypt security', description: 'JWT, password hashing, and protecting routes.' },
      { id: 'node-5', title: 'API Deployment', query: 'Deploy Node.js REST API production', description: 'Deploying APIs to production environments.' },
    ]
  }
};

export const getRoadmapById = (id) => roadmaps[id] || null;
export const getAllRoadmaps = () => Object.values(roadmaps);
