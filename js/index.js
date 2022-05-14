const baseUrl =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations?per_page=9&acf_format=standard";
const postContainer = document.querySelector(".carousel-container");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    postContainer.innerHTML = "";
    console.log(posts);

    posts.forEach(function (post) {
      postContainer.innerHTML += `<div class="slide"> 
      <a href="post.html?id=${post.id}"> 
        <div style="background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${post.acf.featured_image})" class="slide-img"></div>
        <h2>${post.title.rendered}</h2>
        <p class="slide-txt">${post.excerpt.rendered}</p>
        <p class="read-more">Read More ></p>
        </a>
        </div>`;

      // carousel
      const slides = document.querySelectorAll(".slide");
      const nextBtn = document.querySelector(".nextBtn");
      const prevBtn = document.querySelector(".prevBtn");

      slides.forEach(function (slide, index) {
        slide.style.left = `${index * 70}vw`;
      });

      let counter = 0;

      nextBtn.addEventListener("click", function () {
        counter++;
        carousel();
      });
      prevBtn.addEventListener("click", function () {
        counter--;
        carousel();
      });

      function carousel() {
        // working with slides
        if (counter === slides.length) {
          counter = 0;
        }
        if (counter < 0) {
          counter = slides.length - 1;
        }

        slides.forEach(function (slide) {
          slide.style.transform = `translateX(-${counter * 70}vw)`;
        });
      }
    });
  } catch (error) {
    console.log(error);
    postContainer.innerHTML = displayError("An error occurred");
  }
}
getPosts(baseUrl);

// carousel
/*const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (carousel, currentSlide, targetSlide) => {
        carousel.style.transform = "translateX(-" + targetSlide.style.left;
        +")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
      };

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
        if (targetIndex === 0) {
          prevBtn.classList.add("btn-hide");
          nextBtn.classList.remove("btn-hide");
        } else if (targetIndex === slides.length - 1) {
          prevBtn.classList.remove("btn-hide");
          nextBtn.classList.add("btn-hide");
        } else {
          prevBtn.classList.remove("btn-hide");
          nextBtn.classList.remove("btn-hide");
        }
      };

// when click left, move slide to left
prevBtn.addEventListener("click", (e) => {
        const currentSlide = carousel.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const prevIndex = slides.findIndex((slide) => slide === prevSlide);

        moveToSlide(carousel, currentSlide, prevSlide);
        hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
      });

// when click right, move slide to right
nextBtn.addEventListener("click", (e) => {
  const currentSlide = carousel.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(carousel, currentSlide, nextSlide);
        hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});*/
