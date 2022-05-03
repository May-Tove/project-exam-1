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

async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    heroContainer.innerHTML = "";
    postContainer.innerHTML = "";
    console.log(details);
    displayPost(details);
  } catch (error) {
    console.log(error);
  }
}
getPost();

function displayPost(details) {
  postTitle.innerHTML = `My Travel Blog | ${details.title.rendered}`;

  postActiveLink.innerHTML = `${details.title.rendered}`;

  heroContainer.innerHTML = `<div style="background-image: linear-gradient(rgba(0 ,0,0,0.3), rgba(0,0,0,0)), url(${details.acf.featured_image})" class="featured-img">
                                <h1>${details.title.rendered}</h1>
                            </div>`;

  postContainer.innerHTML = `<div class="welcome-section">
                                <p>${details.acf.category}</p>
                                <h1>${details.acf.main_heading}</h1>
                                <p class="excerpt">${details.excerpt.rendered}</p>
                                <div class="published-section">
                                <img src="${details.acf.author_img}" alt="" class="memory-img">
                                <p>Published ${details.acf.date_posted} by ${details.acf.author} </p>
                                </div>
                            </div>
                            <div class="intro-section">
                                <h2></h2>
                                <p>${details.acf.first_paragraph}</p>
                                <p>${details.acf.second_paragraph}</p>
                            </div>
                            <div class="memory-section">
                                <div class="memory-card">
                                    <h2>${details.acf.memory_heading}</h2>
                                    <p>${details.acf.memory_paragraph}</p>
                                    <p>${details.acf.memory_paragraph_2}</p>
                                </div>
                                    <img src="${details.acf.memory_image}" alt="" class="memory-img">
                            </div>
                            <div class="city-section">
                                <h1 class="section-title">Tips on places to visit</h1>
                                <div class="city-1">
                                    <div class="city-text">
                                    <h2>${details.acf.city_heading_1}</h2>
                                    <p>${details.acf.city_paragraph_1}</p>
                                    <p>${details.acf.sub_paragraph_1}</p>
                                    </div>
                                    <img src="${details.acf.image_1}" alt="">
                                </div>
                                <div class="city-2">
                                    <div class="city-text">
                                    <h2>${details.acf.city_heading_2}</h2>
                                    <p>${details.acf.city_paragraph_2}</p>
                                    <p>${details.acf.sub_paragraph_2}</p>
                                    </div>
                                    <img src="${details.acf.image_2}" alt="">
                                </div>
                                <div class="city-3">
                                    <div class="city-text">
                                    <h2>${details.acf.city_heading_3}</h2>
                                    <p>${details.acf.city_paragraph_3}</p>
                                    <p>${details.acf.sub_paragraph_3}</p>
                                    </div>
                                    <img src="${details.acf.image_3}" alt="">
                                </div>
                                <div class="city-4">
                                    <div class="city-text">
                                    <h2>${details.acf.city_heading_4}</h2>
                                    <p>${details.acf.city_paragraph_4}</p>
                                    <p>${details.acf.sub_paragraph_4}</p>
                                    </div>
                                    <img src="${details.acf.image_4}" alt="">
                                </div>
                            </div>
                                    `;
}
