import jump from "jump.js";

// jump(".target");

let navigation = document.getElementById("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navigation.classList.add("bg-white");
  } else {
    navigation.classList.remove("bg-white");
  }
});

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll("#navActive li");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove 'active' class from all items
      items.forEach((i) => i.classList.remove("active"));

      // Add 'active' class to the clicked item
      this.classList.add("active");
    });
  });
});

//____________________CROUSEL TESTIMONIAL START_______________________
const testimonialItems = document.querySelectorAll("[data-carousel-item]");
const testimonialNext = document.getElementsByClassName(
  "button-next__testimonial"
);
const testimonialPrev = document.getElementsByClassName(
  "button-prev__testimonial"
);
const slideNumberDisplay = document.getElementById("testimonialSlide"); // Assuming there's an element to display the slide number
let testimonialCurrent = 1;

const autoChangeInterval = 3000; // Interval untuk perubahan otomatis (5 detik)
let autoChangeTimer;

function updateSlideNumber() {
  const totalSlides = testimonialItems.length;

  // Update the slide number display
  slideNumberDisplay.innerText = `${String(testimonialCurrent).padStart(2, "0")}/${String(totalSlides).padStart(2, "0")}`;

  // Log the current slide and total slides
  console.log(`Current Slide: ${testimonialCurrent}`);
  console.log(`Total Slides: ${totalSlides}`);
}

function nextSlide() {
  const totalSlides = testimonialItems.length;
  if (testimonialCurrent < totalSlides) {
    testimonialCurrent++;
  } else {
    testimonialCurrent = 1;
  }
  updateSlideNumber();
}

// Fungsi untuk berpindah ke slide sebelumnya
function prevSlide() {
  const totalSlides = testimonialItems.length;
  if (testimonialCurrent > 1) {
    testimonialCurrent--;
  } else {
    testimonialCurrent = totalSlides;
  }
  updateSlideNumber();
}

// Fungsi untuk memulai atau mereset interval perubahan otomatis
function startAutoChange() {
  clearInterval(autoChangeTimer); // Hentikan interval sebelumnya
  autoChangeTimer = setInterval(nextSlide, autoChangeInterval); // Atur interval baru
}

testimonialPrev[0].addEventListener("click", () => {
  prevSlide();
  startAutoChange(); // Mulai ulang timer saat tombol diklik
});

// Event listener untuk tombol next
testimonialNext[0].addEventListener("click", () => {
  nextSlide();
  startAutoChange(); // Mulai ulang timer saat tombol diklik
});

startAutoChange();
updateSlideNumber();
//____________________CROUSEL TESTIMONIAL END_______________________
