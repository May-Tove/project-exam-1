const postContainer = document.querySelector(".specific-post");
const heroContainer = document.querySelector(".post-hero");
const postActiveLink = document.querySelector(".post-detail");
const postTitle = document.querySelector(".post-title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://mayth.one/project-exam/wp-json/wp/v2/destinations/" +
  id +
  "?acf_format=standard";

// fetching post from WP REST API
async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    heroContainer.innerHTML = "";
    postContainer.innerHTML = "";
    displayPost(details);
  } catch (error) {
    postContainer.innerHTML = displayError(
      "Oops! An error occurred trying to load the blog post"
    );
  }
}
getPost();

// creating HTML
function displayPost(details) {
  // changing page title to match current post
  postTitle.innerHTML = `Globetrotter | ${details.title.rendered}`;

  // changing active link in breadcrumbs to match current post
  postActiveLink.innerHTML = `${details.title.rendered}`;

  // changing hero-image to match current post
  heroContainer.innerHTML = `<div style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${details.acf.featured_image})" class="featured-img hero">
                                <h1>${details.title.rendered}</h1>
                            </div>`;

  // creating the actual post
  postContainer.innerHTML = `
                            <div class="intro-section">
                            <h2>${details.acf.main_heading}</h2>
                            <p class="small-txt">Published ${details.acf.date_posted}</p>
                                <p>${details.acf.first_paragraph}</p>
                                <p>${details.acf.second_paragraph}</p>
                            </div>
                            <div class="highlight-section">
                                <div class="highlight-card">
                                    <h3>${details.acf.memory_heading}</h3>
                                    <p>${details.acf.memory_paragraph}</p>
                                    <p>${details.acf.memory_paragraph_2}</p>
                                </div>
                                    <img src="${details.acf.memory_image.url}" alt="${details.acf.memory_image.title}" class="memory-img post-img" />
                            </div>
                            <div class="city-section">
                                <h2 class="section-title">Top 4 places to visit</h2>
                                <div class="city-1">
                                    <div class="city-text">
                                    <h3>${details.acf.city_heading_1}</h3>
                                    <p>${details.acf.city_paragraph_1}</p>
                                    <p>${details.acf.sub_paragraph_1}</p>
                                    </div>
                                    <img src="${details.acf.image_1.url}" alt="${details.acf.image_1.title}" class="post-img" />
                                </div>
                                <div class="city-2">
                                    <div class="city-text">
                                    <h3>${details.acf.city_heading_2}</h3>
                                    <p>${details.acf.city_paragraph_2}</p>
                                    <p>${details.acf.sub_paragraph_2}</p>
                                    </div>
                                    <img src="${details.acf.image_2.url}" alt="${details.acf.image_2.title}" class="post-img" />
                                </div>
                                <div class="city-3">
                                    <div class="city-text">
                                    <h3>${details.acf.city_heading_3}</h3>
                                    <p>${details.acf.city_paragraph_3}</p>
                                    <p>${details.acf.sub_paragraph_3}</p>
                                    </div>
                                    <img src="${details.acf.image_3.url}" alt="${details.acf.image_3.title}" class="post-img" />
                                </div>
                                <div class="city-4">
                                    <div class="city-text">
                                    <h3>${details.acf.city_heading_4}</h3>
                                    <p>${details.acf.city_paragraph_4}</p>
                                    <p>${details.acf.sub_paragraph_4}</p>
                                    </div>
                                    <img src="${details.acf.image_4.url}" alt="${details.acf.image_4.title}" class="post-img" />
                                </div>
                            </div>`;

  // image modal
  const images = document.querySelectorAll(".post-img");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

  // open modal when image is clicked
  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalContent.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="modal-img">
                                <span class="modal-txt">${image.alt}</span>`;
      modal.style.display = "block";
    });
  });

  // close modal when clicking outside of image
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}
