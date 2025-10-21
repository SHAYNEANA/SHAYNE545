// Smooth fade-in for text
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".animate-text");
  animatedItems.forEach((item, i) => {
    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, i * 400);
  });
});

// ===== Image Swapping for Side Images =====

// All 6 images available
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// Track current index
let currentIndex = 0;

// Select side image elements
const leftSide = document.querySelectorAll(".left-side .side-img");
const rightSide = document.querySelectorAll(".right-side .side-img");

// Function to swap images
function swapImages() {
  // Left side shows 2 images in sequence
  leftSide.forEach((img, i) => {
    img.src = images[(currentIndex + i) % images.length];
  });

  // Right side shows the next 2 images
  rightSide.forEach((img, i) => {
    img.src = images[(currentIndex + 2 + i) % images.length];
  });

  // Increment index for the next cycle
  currentIndex = (currentIndex + 1) % images.length;
}

// Run immediately when page loads
swapImages();

// Run every 5 seconds
setInterval(swapImages, 5000);
