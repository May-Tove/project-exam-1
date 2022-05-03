const baseUrl =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations?per_page=8&acf_format=standard";
const postContainer = document.querySelector(".slider-container");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    postContainer.innerHTML = "";
    console.log(posts);

    posts.forEach(function (post) {
      postContainer.innerHTML += `<div class="slide">   
      <div style="background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${post.acf.featured_image})" class="slide-img"></div>
      <h2>${post.title.rendered}</h2>
      <p>${post.excerpt.rendered}</p>
      <a href="post.html?id=${post.id}">Read More ></a>
      </div>`;

      const slides = document.querySelectorAll(".slide");
      const nextBtn = document.querySelector(".nextBtn");
      const prevBtn = document.querySelector(".prevBtn");

      slides.forEach(function (slide, index) {
        slide.style.left = `${index * 100}%`;
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
          slide.style.transform = `translateX(-${counter * 100}%)`;
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}
getPosts(baseUrl);
