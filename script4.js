document.addEventListener("DOMContentLoaded", function () {
    // Dropdown functionality
    document.querySelectorAll(".dropdown-toggle").forEach(button => {
        button.addEventListener("click", function (e) {
            e.stopPropagation();
            const dropdownMenu = this.nextElementSibling;

            // Close other dropdowns
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("show");
                }
            });

            // Toggle dropdown
            dropdownMenu.classList.toggle("show");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.classList.remove("show");
            });
        }
    });

    // Gallery filtering
    const allCards = document.querySelectorAll(".art-card");
    const filterButtons = document.querySelectorAll(".category-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            console.log(`Filtering category: ${category}`); // Debugging log

            // Ensure all cards are visible first
            allCards.forEach(card => {
                card.style.display = "none"; // Hide everything first
            });

            // Show only the matching category
            allCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block"; // Show matching category
                }
            });
        });
    });
});
// 🌟 Cursor Sparkle Trail on nav hover
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;

    setTimeout(() => {
      sparkle.remove();
    }, 500);
  });
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".zoom-img").forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};


