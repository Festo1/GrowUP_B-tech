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
