// SWIPER SLIDER
var swiper = new Swiper(".portfolio_swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

});

// FAQS SECTION

let Quest = document.querySelectorAll(".question");
let para = document.querySelectorAll(".faq-para");
let QnsHead = document.querySelectorAll(".qns_icon");

Quest.forEach((drop, index) => {
  drop.addEventListener("click", () => {
    const answer = drop.lastElementChild;

    // Check if the clicked answer is already shown
    const isVisible = answer.classList.contains("showQuestion");

    // Remove the classes from all elements
    para.forEach(paragraph => {
      paragraph.classList.remove("showQuestion");
    });
    QnsHead.forEach(icon => {
      icon.classList.remove("active_ans");
    });

    // Toggle the visibility of the clicked answer
    if (!isVisible) {
      answer.classList.add("showQuestion");
      QnsHead[index].classList.add("active_ans");
    }
  });
});


// Description: This file contains the JavaScript code for the website.
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("introVideo");
  const playIcon = document.getElementById("playIcon");
  const introVideoContainer = document.querySelector(".intro_video");

  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The video is in view
        video.play();
        video.muted = true;
        playIcon.style.display = "block";
        introVideoContainer.classList.remove("playing");
      } else {
        // The video is out of view
        video.pause();
        playIcon.style.display = "block";
        introVideoContainer.classList.remove("playing");
      }
    });
  }, options);

  observer.observe(introVideoContainer);

  playIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from bubbling up to the video
    video.muted = false; // Unmute the video
    video.play();
    playIcon.style.display = "none"; // Hide the play icon
    introVideoContainer.classList.add("playing"); // Remove hover blur
  });

  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      if (!video.muted) {
        playIcon.style.display = "none";
        introVideoContainer.classList.add("playing");
      }
    } else {
      video.pause();
      playIcon.style.display = "block";
      introVideoContainer.classList.remove("playing");
    }
  });

  video.addEventListener("play", function () {
    if (!video.muted) {
      playIcon.style.display = "none";
      introVideoContainer.classList.add("playing");
    }
  });

  video.addEventListener("pause", function () {
    playIcon.style.display = "block";
    introVideoContainer.classList.remove("playing");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter_card h2");

  // Function to animate the counters
  function animateCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target"); // Get target number
      const plus = counter.textContent.includes("+");
      const k = counter.textContent.includes("k");
      let count = 0;

      // Determine the increment value based on the target
      const increment = target / 200; // Adjust '200' to change the speed of counting

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.textContent = `${Math.ceil(count)}${k ? "k" : ""}${
            plus ? "+" : ""
          }`;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = `${target.toLocaleString()}${k ? "k" : ""}${
            plus ? "+" : ""
          }`;
        }
      };

      updateCount();
    });
  }

  // Observer to detect when the counter section is in view
  const counterSection = document.querySelector(".counter");

  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target); // Stop observing after animation starts
      }
    });
  }, options);

  observer.observe(counterSection);
});

//  TESTIMONIALS SLIDER

var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

});

//  BRANDS SLIDER

var swiper = new Swiper(".brandSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },

});

// BLOG SLIDER

var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

});

// MENU TOGGLE

let bar = document.querySelector(".bars");
let menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show_menu");
});