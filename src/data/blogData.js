export const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks: useState and useEffect",
    category: "React",
    date: "June 28, 2025",
    excerpt: "Learn the fundamentals of React Hooks and how useState and useEffect can simplify your component logic.",
    content: `React Hooks revolutionized how we write React components by allowing us to use state and lifecycle methods in functional components. The useState hook lets you add state to functional components, while useEffect handles side effects like API calls and DOM manipulation.

    useState returns an array with two elements: the current state value and a function to update it. useEffect runs after every render by default, but you can control when it runs using dependency arrays.

    These hooks make your code more readable and reusable compared to class components.`,
    readTime: "5 min read",
    tags: ["React", "Hooks", "JavaScript"]
  },
  {
    id: 2,
    title: "Vue.js Reactive Data: The Magic Behind Reactivity",
    category: "Vue.js",
    date: "June 26, 2025",
    excerpt: "Discover how Vue.js achieves reactivity and why it makes building dynamic user interfaces so intuitive.",
    content: `Vue.js uses a reactivity system that automatically tracks dependencies and updates the DOM when data changes. This is achieved through JavaScript's Object.defineProperty() (Vue 2) or Proxy (Vue 3).

    When you define data in a Vue component, Vue wraps it in reactive getters and setters. When a reactive property is accessed during render, Vue tracks it as a dependency. When the property changes, all dependent components re-render automatically.

    This seamless reactivity is what makes Vue so developer-friendly and efficient.`,
    readTime: "4 min read",
    tags: ["Vue.js", "Reactivity", "JavaScript"]
  },
  {
    id: 3,
    title: "Node.js Event Loop: Understanding Asynchronous Programming",
    category: "Node.js",
    date: "June 24, 2025",
    excerpt: "Master the Node.js event loop and learn how asynchronous operations work behind the scenes.",
    content: `The Node.js event loop is the heart of Node's asynchronous, non-blocking I/O model. It's a single-threaded loop that handles all asynchronous operations by delegating them to the system and processing their callbacks when they complete.

    The event loop has six main phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks. Understanding these phases helps you write more efficient Node.js applications.

    Key takeaway: Node.js can handle thousands of concurrent connections with a single thread thanks to its event-driven architecture.`,
    readTime: "6 min read",
    tags: ["Node.js", "Event Loop", "Asynchronous"]
  },
  {
    id: 4,
    title: "JavaScript Closures: Scope and Memory Made Simple",
    category: "JavaScript",
    date: "June 22, 2025",
    excerpt: "Understand closures in JavaScript and how they help with data privacy and function factories.",
    content: `A closure is created when a function is defined inside another function and has access to the outer function's variables. The inner function 'closes over' the outer function's scope, maintaining access to those variables even after the outer function returns.

    Closures are powerful for creating private variables, function factories, and module patterns. They're also fundamental to how many JavaScript frameworks and libraries work internally.

    Remember: closures keep references to outer variables, not copies, so be mindful of memory usage in long-running applications.`,
    readTime: "5 min read",
    tags: ["JavaScript", "Closures", "Scope"]
  },
  {
    id: 5,
    title: "React Native Navigation: Moving Between Screens",
    category: "React Native",
    date: "June 20, 2025",
    excerpt: "Learn how to implement navigation in React Native apps using React Navigation library.",
    content: `Navigation is crucial for any mobile app, and React Navigation is the go-to solution for React Native. It provides stack, tab, and drawer navigators that work seamlessly across iOS and Android.

    Stack Navigator works like a web browser's history - you push screens onto the stack and pop them off. Tab Navigator creates bottom or top tabs, while Drawer Navigator provides a slide-out menu.

    The library handles platform-specific animations and gestures automatically, giving your app a native feel on both platforms.`,
    readTime: "7 min read",
    tags: ["React Native", "Navigation", "Mobile"]
  },
  {
    id: 6,
    title: "Vue.js Components: Building Reusable UI Elements",
    category: "Vue.js",
    date: "June 18, 2025",
    excerpt: "Master Vue.js components and learn how to create reusable, maintainable UI elements.",
    content: `Vue components are the building blocks of Vue applications. Each component encapsulates its own template, logic, and styling, making your code more organized and reusable.

    Components communicate through props (parent to child) and events (child to parent). Vue also provides slots for content distribution and scoped slots for more advanced use cases.

    Single File Components (.vue files) combine template, script, and style in one file, making development more intuitive and maintainable.`,
    readTime: "6 min read",
    tags: ["Vue.js", "Components", "UI"]
  },
  {
    id: 7,
    title: "Node.js Express Middleware: The Request Pipeline",
    category: "Node.js",
    date: "June 16, 2025",
    excerpt: "Understand how Express middleware works and how to use it to handle requests efficiently.",
    content: `Express middleware functions are the backbone of Express applications. They have access to the request object, response object, and the next middleware function in the application's request-response cycle.

    Middleware can execute code, modify request/response objects, end the request-response cycle, or call the next middleware. Common use cases include logging, authentication, parsing request bodies, and error handling.

    The order of middleware matters - they execute in the order they're defined, so place authentication middleware before protected routes.`,
    readTime: "5 min read",
    tags: ["Node.js", "Express", "Middleware"]
  },
  {
    id: 8,
    title: "JavaScript Promises: Handling Asynchronous Operations",
    category: "JavaScript",
    date: "June 14, 2025",
    excerpt: "Learn how JavaScript Promises work and how they simplify asynchronous programming.",
    content: `Promises represent the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callbacks and help avoid callback hell.

    A Promise has three states: pending, fulfilled, or rejected. You can chain promises using .then() and .catch(), or use async/await for even cleaner syntax.

    Promise.all() lets you wait for multiple promises to complete, while Promise.race() resolves with the first promise to complete. These utilities are essential for handling multiple asynchronous operations.`,
    readTime: "6 min read",
    tags: ["JavaScript", "Promises", "Async"]
  },
  {
    id: 9,
    title: "React Context API: State Management Without Redux",
    category: "React",
    date: "June 12, 2025",
    excerpt: "Discover how React Context API can help you manage global state without external libraries.",
    content: `React Context API provides a way to share data across components without prop drilling. It's perfect for global state like user authentication, theme preferences, or language settings.

    Create a context with React.createContext(), provide values with a Provider component, and consume them with useContext hook. Context is great for relatively stable data that doesn't change frequently.

    While Context is powerful, remember that it's not a complete replacement for state management libraries like Redux for complex applications.`,
    readTime: "5 min read",
    tags: ["React", "Context API", "State Management"]
  },
  {
    id: 10,
    title: "React Native AsyncStorage: Persisting Data Locally",
    category: "React Native",
    date: "June 10, 2025",
    excerpt: "Learn how to store and retrieve data locally in React Native using AsyncStorage.",
    content: `AsyncStorage is React Native's solution for simple, asynchronous, persistent, key-value storage. It's perfect for storing user preferences, authentication tokens, or small amounts of data that need to persist between app sessions.

    All AsyncStorage methods are asynchronous and return promises. Common methods include setItem(), getItem(), removeItem(), and getAllKeys(). Always handle errors appropriately since storage operations can fail.

    For complex data structures, remember to JSON.stringify() when storing and JSON.parse() when retrieving data.`,
    readTime: "4 min read",
    tags: ["React Native", "AsyncStorage", "Data Persistence"]
  }
];

export const categories = ["All", "React", "Vue.js", "Node.js", "JavaScript", "React Native"];

export const featuredPost = blogPosts[0];