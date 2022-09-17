console.log(`Project 3 - News API`);

let apiKey = "78b4044bed5544fcbc1d33c5a0ff96fb";
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
//API request
const xhr = new XMLHttpRequest();

xhr.open("GET", url, true);

xhr.onprogress = function () {
  console.log(`Ajax request in progress`);
  //   let newsContainer = document.getElementById("newsContainer");
  //   newsContainer.innerHTML = "Loading .....";   // not working in onprogress
};

xhr.onreadystatechange = function () {
  console.log(`onreadystatechange - ${this.readyState}`);
  //   if (this.readyState !== 4) {
  //     let newsContainer = document.getElementById("newsContainer");
  //     newsContainer.innerHTML = "Loading .....";   // not working in onprogress
  //   }
};

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.response);
    console.log(json);
    displayNews(json);
  }
};

xhr.send();

//display news in DOM
const displayNews = (apiData) => {
  console.log("displayNews", apiData);
  let newsSection = "";
  apiData["articles"].forEach((element, index) => {
    let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}"
                        aria-expanded="true"
                        aria-controls="collapse${index}"
                    >
                      <strong>  Breaking news ${index + 1} : </strong> ${
      element.title
    }
                    </button>
                    </h2>
                    <div
                    id="collapse${index}"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample"
                    >
                    <div class="accordion-body">
                        ${element.description}
                        <a href="${element.url}" target="_blank">Read more</a>
                    </div>
                    </div>
                </div>`;
    newsSection += news;
  });

  let newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = newsSection;
};
