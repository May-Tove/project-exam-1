const baseUrl =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations?per_page=12&acf_format=standard";
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
                                        <div style="background-image: url(${post.acf.featured_image})" class="slide-img">
                                        <div class="overlay">
                                        <div class="overlay-content">
                                        <h3 class="overlay-title">${post.title.rendered}</h3>
                                        </div>
                                        </div>
                                        </div>
                                        <p class="post-date">Published ${post.acf.date_posted}</p>
                                        <h3>${post.acf.main_heading}</h3>
                                    </a>
                                </div>`;

      // carousel
      const slides = document.querySelectorAll(".slide");
      const nextBtn = document.querySelector(".next-btn");
      const prevBtn = document.querySelector(".prev-btn");

      // moving slides
      slides.forEach(function (slide, index) {
        slide.style.left = `${index * 70}vw`;
      });

      let counter = 0;

      // move slide to left when clicking next button
      nextBtn.addEventListener("click", function () {
        counter++;
        carousel();
      });

      // move slide to right when clicking prev button
      prevBtn.addEventListener("click", function () {
        counter--;
        carousel();
      });

      // make carousel infinite
      function carousel() {
        // going back to first slide when clicking next button when on the last slide
        if (counter === 4) {
          counter = 0;
        }
        // going to last slide when clicking prev button from the first slide
        if (counter < 0) {
          counter = 4 - 1;
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
