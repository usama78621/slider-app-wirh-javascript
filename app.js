const silder = document.querySelectorAll(".side");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

silder.forEach(function (side, index) {
  side.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  curslwe();
});
prevBtn.addEventListener("click", function () {
  counter--;
  curslwe();
});

function curslwe() {
  if (counter === silder.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = silder.length - 1;
  }
  if (counter < 0) {
    counter = 0;
  }
  if (counter < silder.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  silder.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";
