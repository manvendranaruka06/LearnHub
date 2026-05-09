# 📚 LearnHub AI – The Smart Learning Assistant

## 🚀 Overview

**LearnHub AI** is a React-based guided learning platform designed to help developers master new skills step-by-step. Instead of drowning in endless search results, users select a structured roadmap and progress through curated lessons featuring top-tier YouTube tutorials, GitHub repositories, and GeeksForGeeks articles. It tracks your progress and allows you to save personal notes locally!

---

## ✨ Key Features

### 🗺️ Smart Learning Roadmaps
* Pre-defined, structured learning paths (React.js, Data Structures & Algorithms, Node.js).
* Visual timeline tracking for a step-by-step learning journey.

### 🎥 Multi-Platform Resource Integration
For every single step in your roadmap, LearnHub AI automatically fetches:
* **YouTube Videos**: Top tutorials with views and publish dates.
* **GeeksForGeeks Articles**: Highly relevant articles categorized by difficulty (Basic/Easy/Medium).
* **GitHub Repositories**: Related codebases and projects to practice on.

### 📈 Progress Tracking & Notes
* Checkboxes to mark specific roadmap steps as "Completed".
* Visual progress bar updating in real-time.
* A built-in Notes Section for users to jot down code snippets and takeaways.
* Complete persistence via `localStorage` (your progress is never lost!).

### 🔍 Search & Filtering Engine
* A powerful search bar equipped with custom debouncing (`useDebounce`).
* Dynamic filtering by level (Beginner/Intermediate/Advanced) and categories.
* Sorting functionality (Most Viewed, Most Starred, Latest).

### 🎨 Premium UI/UX
* Modern, responsive design using **Tailwind CSS v4**.
* Smooth glassmorphism components with hover micro-interactions.
* Skeleton loaders instead of generic spinners for perceived performance.
* Seamless Dark Mode toggle.

---

## 🛠️ Tech Stack

* **Frontend**: React.js, React Router DOM, Vite
* **Styling**: Tailwind CSS (with bespoke glassmorphism utilities)
* **Icons**: Lucide React
* **Data Fetching**: Fetch API
* **State Management**: React Context API (`ProgressContext`, `ThemeContext`, `FavoritesContext`) + LocalStorage
* **Logic**: JavaScript ES6+ (Extensive use of Higher-Order Functions like `map`, `filter`, `sort`)

---

## 📁 Updated Folder Structure

```
src/
 ├── components/       # Reusable UI components (VideoCard, GFGCard, SkeletonCard, etc.)
 ├── context/          # Global state managers (Progress, Favorites, Theme)
 ├── data/             # Static configurations (roadmaps.js)
 ├── hooks/            # Custom React hooks (useDebounce)
 ├── pages/            # Main views (Home, Dashboard, StepDetails, Favorites)
 ├── routes/           # Routing configuration (AppRoutes.jsx)
 ├── services/         # API integration (githubApi.js, youtubeApi.js)
 ├── utils/            # Helper functions
 ├── App.jsx           # Root layout and Providers
 ├── index.css         # Tailwind configurations and glassmorphism globals
 └── main.jsx          # React DOM entry point
```

---

## 🔌 APIs Used

* **YouTube Data API v3** – Fetches high-quality tutorial videos.
* **GitHub REST API** – Retrieves repositories, stars, and forks data.

---

## 🚀 How to Run Locally

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add your YouTube API Key:
   ```
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```
4. Run `npm run dev` to start the Vite development server.

---

## ⭐ Conclusion

LearnHub AI elevates self-taught programming by replacing scattered Google searches with highly focused, visually appealing learning paths—enabling students to save time and focus purely on understanding concepts.
