import useLocalStorage from "./useLocalStorage";
import "./style.css";
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Light-Dark mode</p>
        <button onClick={handleToggleTheme}>Toggle modes</button>
      </div>
    </div>
  );
}
