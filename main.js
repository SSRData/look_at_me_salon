// ==========================
// ACCORDION MENU
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".menu-category");

  categories.forEach(category => {
    const toggle = category.querySelector(".menu-toggle");

    toggle.addEventListener("click", () => {
      // Close other open categories
      categories.forEach(item => {
        if (item !== category) {
          item.classList.remove("active");
        }
      });

      // Toggle current category
      category.classList.toggle("active");
    });
  });
});
