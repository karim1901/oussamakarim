const STORAGE_KEY = "theme";
const EVENT = "themechange";

// Runs inline in <head> before first paint: stored choice first, then the OS preference.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function getServerTheme() {
  return null;
}

export function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function subscribeTheme(callback) {
  const media = window.matchMedia("(prefers-color-scheme: light)");

  // Follow OS changes only until the visitor makes an explicit choice.
  const onSystemChange = () => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (stored) return;
    document.documentElement.setAttribute("data-theme", media.matches ? "light" : "dark");
    callback();
  };

  window.addEventListener(EVENT, callback);
  media.addEventListener("change", onSystemChange);

  return () => {
    window.removeEventListener(EVENT, callback);
    media.removeEventListener("change", onSystemChange);
  };
}
