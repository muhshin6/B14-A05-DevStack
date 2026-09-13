# DevStack

A modern, interactive technology catalog for developers to explore, compare, and build their ideal development stack. Browse 15+ technologies across 7 categories with detailed ratings, difficulty levels, and badges—then curate your personalized stack with a single click.

## 📖 Description

DevStack helps developers make informed technology choices by presenting a curated collection of popular tools and frameworks. Each technology card displays key metrics (rating, difficulty, category badges) so you can quickly compare options. Build your stack by adding technologies to the sidebar, which persists your selections and provides instant feedback via toast notifications.

## 🛠️ Technologies Used

| Category | Technologies |
|----------|--------------|
| **Core** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS 4 |
| **State & Effects** | React Hooks (`useState`, `useEffect`) |
| **Notifications** | Sonner (toast) |
| **Data** | Local JSON (`/public/data/technologies.json`) |
| **Linting** | Oxlint |

## ✨ Features

1. **Interactive Technology Cards** — Browse 15 technologies across 7 categories (Frontend, Backend, Database, Language, Styling, DevOps, Tools). Each card shows an icon, rating (★), difficulty level, and category badge for quick comparison.

2. **Build Your Stack** — Click "Add to Stack" on any technology to move it to your personal sidebar. The stack updates in real-time, prevents duplicates with warnings, and supports removing individual items or clearing all at once.

3. **Responsive Layout with Sticky Sidebar** — The technology grid adapts from 1 column (mobile) to 3 columns (desktop). The "Your Stack" sidebar stays fixed while scrolling on large screens, keeping your selections always visible.

---

## 🧠 React Concepts — Q&A

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup inside JavaScript. It makes component structure readable and expressive, and gets compiled to `React.createElement()` calls. Used throughout this project (e.g., `TechnologyCatalog`, `Navbar`, `Banner`).

### 2. What is the difference between props and state?
**Props** are read-only data passed from a parent component to a child. **State** is mutable data owned and managed by the component itself. In this project, `Technologies` data flows as props from the JSON fetch into the catalog, while `selectedTechnologies` is local state managed inside `TechnologyCatalog`.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` adds reactive state to a function component. It returns the current value and a setter function. In `TechnologyCatalog`:
- `technologies` — stores the fetched technology list
- `selectedTechnologies` — stores the user's chosen stack

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after render. With an empty dependency array `[]`, it runs once on mount. I used it to fetch `/data/technologies.json` when `TechnologyCatalog` mounts, then populate the `technologies` state with the result.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
Keys help React identify which items changed, were added, or removed. Without stable keys, React may reorder or recreate DOM nodes incorrectly, causing bugs and performance issues. In this project, each technology has a unique `id` used as `key` in both the grid and stack list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering shows different UI based on state. In `TechnologyCatalog` (lines 159–198), the stack sidebar renders either an empty-state message ("Your stack is empty") or a list of selected technologies depending on `selectedTechnologies.length`.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Parent → Child:** Pass data via props (`<Child propName={value} />`).  
**Child → Parent:** The parent passes a callback function as a prop; the child calls it with data (`onAdd={handleAdd}`). In this project, `App` renders `TechnologyCatalog` which manages its own state internally, but the pattern applies when lifting state up.