// 工具搜索过滤
function filterTools(keyword) {
  const cards = document.querySelectorAll(".grid .card");
  const kw = keyword.toLowerCase();
  cards.forEach(c => {
    const text = c.textContent.toLowerCase();
    c.style.display = text.includes(kw) ? "" : "none";
  });
}

// 分类按钮
document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".cat-btn");
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      const cards = document.querySelectorAll(".grid .card");
      cards.forEach(c => {
        if (cat === "all" || c.dataset.cat === cat) {
          c.style.display = "";
        } else {
          c.style.display = "none";
        }
      });
    });
  });

  const search = document.getElementById("searchInput");
  if (search) {
    search.addEventListener("input", () => filterTools(search.value));
  }
});
