// Apply saved theme on load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}

// Toggle dark mode
function toggleDark() {
  document.body.classList.toggle("dark");

  let isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

  document.querySelector("button").textContent = isDark
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
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
