// Dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}

// Search
document.getElementById("search").addEventListener("input", function () {
  let value = this.value.toLowerCase();

  document.querySelectorAll("#notesList li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(value)
      ? ""
      : "none";
  });
});
