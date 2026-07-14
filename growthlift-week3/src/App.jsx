import "./App.css";

import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>Week 3 - Props & useState</h1>

      <Card
        title="React"
        description="React is a JavaScript library used for building user interfaces."
        color="#4A90E2"
      />

      <Card
        title="Vite"
        description="Vite provides a fast development environment with instant updates."
        color="#34A853"
      />

      <Card
        title="Tailwind CSS"
        description="Tailwind is a utility-first CSS framework for rapidly building interfaces."
        color="#8E44AD"
      />

      <Counter />

      <Toggle />
    </div>
  );
}

export default App;