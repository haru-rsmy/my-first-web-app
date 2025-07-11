export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  homeLink.addEventListener("click", () => {
    homeSection.classList.remove("hidden");
    converterSection.classList.add("hidden");
  });

  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}
