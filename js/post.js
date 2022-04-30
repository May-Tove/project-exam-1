const postContainer = document.querySelector(".detail-container");
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

  postContainer.innerHTML = `<div class="published-section">
                                <p>Published by: ${details.acf.author} on the ${details.acf.date_posted}</p>
                                </div>
                                <div class="welcome-section">
                                    <h1>${details.acf.main_heading}</h1>
                                    <p>${details.acf.first_paragraph}</p>
                                    <p>${details.acf.second_paragraph}</p>
                                </div>
                                <section class="memory-section">
                                    <h2>${details.acf.memory_heading}</h2>
                                    <p>${details.acf.memory_paragraph}</p>
                                    <img src="${details.acf.memory_image}" alt="">
                                </section>
                                <section class="city-section">
                                    <div class="city-1">
                                        <h3>${details.acf.city_heading_1}</h3>
                                        <p>${details.acf.city_paragraph_1}</p>
                                        <img src="${details.acf.image_1}" alt="">
                                    </div>
                                    <div class="city-2">
                                    <h3>${details.acf.city_heading_2}</h3>
                                    <p>${details.acf.city_paragraph_2}</p>
                                    <img src="${details.acf.image_2}" alt="">
                                </div>
                                <div class="city-3">
                                <h3>${details.acf.city_heading_3}</h3>
                                <p>${details.acf.city_paragraph_3}</p>
                                <img src="${details.acf.image_3}" alt="">
                            </div>
                            <div class="city-4">
                            <h3>${details.acf.city_heading_4}</h3>
                            <p>${details.acf.city_paragraph_4}</p>
                            <img src="${details.acf.image_4}" alt="">
                        </div>
                                </section>
                                    `;
}
