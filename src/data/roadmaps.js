export const roadmaps = {
  react: {
    id: 'react',
    title: 'React.js Mastery',
    description: 'Master modern React from fundamentals to advanced state management and hooks.',
    icon: 'Code2',
    color: 'blue',
    steps: [
      { 
        id: 'react-1', 
        title: 'HTML & CSS Foundations', 
        query: 'HTML CSS basics for React beginners', 
        description: 'Understand the building blocks of the web.',
        gfgLinks: [
          { title: 'HTML Basics', url: 'https://www.geeksforgeeks.org/html/', description: 'A complete guide to HTML basics.', difficulty: 'Basic' },
          { title: 'CSS Tutorial', url: 'https://www.geeksforgeeks.org/css/', description: 'Learn how to style your web pages.', difficulty: 'Easy' }
        ]
      },
      { 
        id: 'react-2', 
        title: 'JavaScript ES6+', 
        query: 'JavaScript ES6 crash course modern JS', 
        description: 'Arrow functions, destructuring, map, filter, promises.',
        gfgLinks: [
          { title: 'JavaScript Let and Const', url: 'https://www.geeksforgeeks.org/javascript-let-const-and-var/', description: 'Understand variable declarations in ES6.', difficulty: 'Basic' },
          { title: 'Arrow Functions in JavaScript', url: 'https://www.geeksforgeeks.org/arrow-functions-in-javascript/', description: 'Learn about concise function syntax.', difficulty: 'Easy' },
          { title: 'JavaScript Promises', url: 'https://www.geeksforgeeks.org/javascript-promises/', description: 'Master asynchronous programming.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'react-3', 
        title: 'React Fundamentals', 
        query: 'React.js basics components props state', 
        description: 'JSX, Components, Props, and basic State.',
        gfgLinks: [
          { title: 'Introduction to ReactJS', url: 'https://www.geeksforgeeks.org/reactjs-introduction/', description: 'Understand what React is and why it is used.', difficulty: 'Basic' },
          { title: 'React Components', url: 'https://www.geeksforgeeks.org/reactjs-components/', description: 'Learn about functional and class components.', difficulty: 'Easy' }
        ]
      },
      { 
        id: 'react-4', 
        title: 'React Hooks', 
        query: 'React Hooks useState useEffect custom hooks', 
        description: 'Master useState, useEffect, and custom hooks.',
        gfgLinks: [
          { title: 'React Hooks', url: 'https://www.geeksforgeeks.org/react-hooks/', description: 'Introduction to Hooks in functional components.', difficulty: 'Easy' },
          { title: 'useState Hook', url: 'https://www.geeksforgeeks.org/reactjs-usestate-hook/', description: 'Manage state in functional components.', difficulty: 'Easy' },
          { title: 'useEffect Hook', url: 'https://www.geeksforgeeks.org/reactjs-useeffect-hook/', description: 'Handle side effects in React.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'react-5', 
        title: 'Routing & State Management', 
        query: 'React Router DOM Context API Redux tutorial', 
        description: 'React Router, Context API, and global state.',
        gfgLinks: [
          { title: 'React Router DOM', url: 'https://www.geeksforgeeks.org/react-router-dom/', description: 'Navigation in single-page applications.', difficulty: 'Medium' },
          { title: 'Context API in React', url: 'https://www.geeksforgeeks.org/reactjs-context-api/', description: 'Avoid prop drilling by passing data globally.', difficulty: 'Medium' },
          { title: 'Redux Tutorial', url: 'https://www.geeksforgeeks.org/redux-tutorial/', description: 'Global state management for complex apps.', difficulty: 'Hard' }
        ]
      },
      { 
        id: 'react-6', 
        title: 'Next.js & Full-stack', 
        query: 'Next.js 14 app router beginner tutorial', 
        description: 'Take your React skills to the server with Next.js.',
        gfgLinks: [
          { title: 'Introduction to Next.js', url: 'https://www.geeksforgeeks.org/introduction-to-next-js/', description: 'React framework for production.', difficulty: 'Medium' },
          { title: 'Server-Side Rendering (SSR)', url: 'https://www.geeksforgeeks.org/server-side-rendering-in-next-js/', description: 'Render pages on the server.', difficulty: 'Medium' }
        ]
      },
    ]
  },
  dsa: {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Crack coding interviews by mastering data structures and algorithmic problem solving.',
    icon: 'Binary',
    color: 'emerald',
    steps: [
      { 
        id: 'dsa-1', 
        title: 'Time & Space Complexity', 
        query: 'Big O notation time and space complexity explained', 
        description: 'Understand Big O notation and algorithm efficiency.',
        gfgLinks: [
          { title: 'Time Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/', description: 'Introduction to measuring performance.', difficulty: 'Basic' },
          { title: 'Space Complexity', url: 'https://www.geeksforgeeks.org/g-fact-86/', description: 'Analyzing memory usage.', difficulty: 'Basic' }
        ]
      },
      { 
        id: 'dsa-2', 
        title: 'Arrays & Strings', 
        query: 'Arrays and Strings Data Structures algorithms', 
        description: 'Two pointers, sliding window, and string manipulation.',
        gfgLinks: [
          { title: 'Array Data Structure', url: 'https://www.geeksforgeeks.org/array-data-structure/', description: 'Comprehensive guide to arrays.', difficulty: 'Basic' },
          { title: 'String Data Structure', url: 'https://www.geeksforgeeks.org/string-data-structure/', description: 'Learn about text processing.', difficulty: 'Easy' },
          { title: 'Sliding Window Technique', url: 'https://www.geeksforgeeks.org/window-sliding-technique/', description: 'Optimize array iterations.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'dsa-3', 
        title: 'Linked Lists', 
        query: 'Linked List Data Structure tutorial', 
        description: 'Singly, doubly linked lists, and slow/fast pointers.',
        gfgLinks: [
          { title: 'Linked List Data Structure', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/', description: 'Introduction and implementation.', difficulty: 'Easy' },
          { title: 'Detect Loop in Linked List', url: 'https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/', description: 'Floyd’s Cycle-Finding Algorithm.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'dsa-4', 
        title: 'Trees & Graphs', 
        query: 'Binary Trees and Graphs algorithms DFS BFS', 
        description: 'Binary trees, BSTs, DFS, and BFS traversal.',
        gfgLinks: [
          { title: 'Binary Tree Data Structure', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/', description: 'Complete tree tutorial.', difficulty: 'Easy' },
          { title: 'Graph Data Structure', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/', description: 'Representations and traversals.', difficulty: 'Medium' },
          { title: 'BFS vs DFS', url: 'https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/', description: 'Compare traversal algorithms.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'dsa-5', 
        title: 'Dynamic Programming', 
        query: 'Dynamic programming complete tutorial beginners', 
        description: 'Memoization, tabulation, and standard DP problems.',
        gfgLinks: [
          { title: 'Dynamic Programming', url: 'https://www.geeksforgeeks.org/dynamic-programming/', description: 'Optimization over recursion.', difficulty: 'Hard' },
          { title: '0-1 Knapsack Problem', url: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/', description: 'A classic DP problem.', difficulty: 'Hard' }
        ]
      },
    ]
  },
  node: {
    id: 'node',
    title: 'Node.js Backend Developer',
    description: 'Learn to build robust, scalable REST APIs using Node.js, Express, and MongoDB.',
    icon: 'Server',
    color: 'green',
    steps: [
      { 
        id: 'node-1', 
        title: 'Node.js Basics', 
        query: 'Node.js basics tutorial for beginners', 
        description: 'Event loop, modules, and file system.',
        gfgLinks: [
          { title: 'Introduction to Node.js', url: 'https://www.geeksforgeeks.org/introduction-to-nodejs/', description: 'Learn what Node is.', difficulty: 'Basic' },
          { title: 'Event Loop in Node.js', url: 'https://www.geeksforgeeks.org/node-js-event-loop/', description: 'Understand how Node handles async operations.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'node-2', 
        title: 'Express.js Fundamentals', 
        query: 'Express.js crash course REST API', 
        description: 'Routing, middleware, and handling requests.',
        gfgLinks: [
          { title: 'Express.js Tutorial', url: 'https://www.geeksforgeeks.org/express-js/', description: 'Fast, unopinionated web framework for Node.', difficulty: 'Easy' },
          { title: 'Middleware in Express', url: 'https://www.geeksforgeeks.org/middleware-in-express-js/', description: 'Understand request processing pipeline.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'node-3', 
        title: 'MongoDB & Mongoose', 
        query: 'MongoDB Mongoose tutorial Node.js', 
        description: 'NoSQL databases, schemas, and models.',
        gfgLinks: [
          { title: 'MongoDB Tutorial', url: 'https://www.geeksforgeeks.org/mongodb/', description: 'NoSQL database concepts.', difficulty: 'Easy' },
          { title: 'Mongoose Introduction', url: 'https://www.geeksforgeeks.org/mongoose-introduction/', description: 'ODM for MongoDB in Node.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'node-4', 
        title: 'Authentication & Security', 
        query: 'Node.js JWT authentication bcrypt security', 
        description: 'JWT, password hashing, and protecting routes.',
        gfgLinks: [
          { title: 'JWT Authentication', url: 'https://www.geeksforgeeks.org/json-web-token-jwt/', description: 'Stateless user authentication.', difficulty: 'Medium' },
          { title: 'Hashing Passwords using bcrypt', url: 'https://www.geeksforgeeks.org/password-hashing-using-bcrypt-in-node-js/', description: 'Secure user credentials.', difficulty: 'Medium' }
        ]
      },
      { 
        id: 'node-5', 
        title: 'API Deployment', 
        query: 'Deploy Node.js REST API production', 
        description: 'Deploying APIs to production environments.',
        gfgLinks: [
          { title: 'Deploying Node App', url: 'https://www.geeksforgeeks.org/how-to-deploy-node-js-app-on-heroku/', description: 'Guide to pushing Node to production.', difficulty: 'Hard' }
        ]
      },
    ]
  }
};

export const getRoadmapById = (id) => roadmaps[id] || null;
export const getAllRoadmaps = () => Object.values(roadmaps);
