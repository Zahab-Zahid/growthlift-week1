import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import QuoteBox from "./components/QuoteBox";
import SkillsList from "./components/SkillsList";
import StudentCards from "./components/StudentCards";

function App() {
  return (
    <div className="app">

      <Header />

      <Card
        title="React"
        description="Component based library"
        color="royalblue"
      />

      <Card
        title="Vite"
        description="Fast development server"
        color="mediumseagreen"
      />

      <Card
        title="Tailwind"
        description="Utility-first CSS"
        color="tomato"
      />

      <Counter />

      <Toggle />

      <QuoteBox />

      <SkillsList />

      <StudentCards />

    </div>
  );
}

export default App;