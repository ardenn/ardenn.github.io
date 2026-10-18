const root = document.documentElement;
const systemDark = matchMedia("(prefers-color-scheme: dark)");

function storedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const dark = !root.classList.contains("dark");
  root.classList.toggle("dark", dark);
  try {
    // Clear the override when it matches the system preference, so the site follows the OS again.
    if (dark === systemDark.matches) localStorage.removeItem("theme");
    else localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
});

systemDark.addEventListener("change", (e) => {
  if (!storedTheme()) root.classList.toggle("dark", e.matches);
});
