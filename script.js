// Apply saved theme on load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}
//docs
function loadDoc(link) {
  document.getElementById("viewer").src = link;
}
// Toggle dark mode
function toggleDark() {
  document.documentElement.classList.toggle("dark");

  let isDark = document.documentElement.classList.contains("dark");

  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  document.querySelector("button").textContent = isDark
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}
// Toggle sidebar
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
// Search
document.getElementById("search")?.addEventListener("input", function () {
  let value = this.value.toLowerCase();

  document.querySelectorAll("#notesList li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(value)
      ? ""
      : "none";
  });
});
