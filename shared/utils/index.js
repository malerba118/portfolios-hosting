export const initGoodies = () => {
  const syncAppHeight = () => {
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", syncAppHeight);
  syncAppHeight();
};
