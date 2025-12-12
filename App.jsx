import { useEffect, useState } from "react";
import CourseList from "./pages/CourseList";
import Navbar from "./components/Navbar";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <CourseList />
    </>
  );
}
