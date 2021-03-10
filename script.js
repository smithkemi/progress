const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const quotes = document.querySelectorAll(".quote");

let currentActive = 1;
let currentActive1 = 1;

next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length && currentActive1 > quotes.length) {
    currentActive = circles.length;
    currentActive1 = quotes.length;
  }
  update();
  change();
});

prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1 && currentActive1 < 1) {
    currentActive = 1;
    currentActive1 = 1;
  }
  update();
  change();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
function change() {
  quotes.forEach((quote, idx) => {
    if (idx < currentActive) {
      quote.classList.toggle("active1");
    } else {
      quote.classList.remove("active1");
    }
  });
}
