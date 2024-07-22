import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div data-theme={theme}>
      <div>
        <p>Light-Dark mode</p>
        <button onClick={handleToggleTheme}>Toggle modes</button>
      </div>
    </div>
  );
}
