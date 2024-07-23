AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Pizza Sales Analysis - Power BI and SQL",
    cardImage: "assets/images/techstack-page/pizza.jpg", 
    description: "This was an interesting project. I first analyzed all the data in SQL and also created a PDF report from it. Then, I visualized the data and created the dashboard to Viualize the actionable insights in Power BI.",
    Previewlink: "https://mavenanalytics.io/project/16775",
    Githublink: "https://github.com/karthikeyan-the-analyst/Pizza-Sales-Data-Analysis",
  },
  {
    title: "Bank Loan Analysis - Power BI and SQL",
    cardImage: "assets/images/techstack-page/Bank.png",
    description: "This project delves into a detailed analysis of bank loan data, utilizing SQL for data querying and manipulation, followed by visualization and further analysis in Power BI.",
    Previewlink: "https://mavenanalytics.io/project/17612",
    Githublink: "https://github.com/karthikeyan-the-analyst/Bank-Loan-Data-Analysis",
  },
  {
    title: "Crime Hotspot detection - Machine Learining",
    cardImage: "assets/images/techstack-page/crime.jpg",
    description: "This is a machine learning model built to predict the crime hotspot.",
    Previewlink: "https://github.com/karthikeyan-the-analyst/Crime-Hotspot-Detection",
    Githublink: "https://github.com/karthikeyan-the-analyst/Crime-Hotspot-Detection",
  },
  {
    title: "Walmart Sales Analysis - SQL",
    cardImage: "assets/images/techstack-page/Walmart.jpg",
    description: "This project aims to explore the Walmart Sales data to understand top performing branches and products, sales trend of of different products, customer behaviour.",
    Previewlink: "https://github.com/karthikeyan-the-analyst/Walmart-Sales-Analysis",
    Githublink:  "https://github.com/karthikeyan-the-analyst/Walmart-Sales-Analysis",
  },
  {
    title: "Blinkit Analysis - Power BI",
    cardImage: "assets/images/techstack-page/blinkit.jpg",
    description: "This project delves into a detailed analysis of Blinkit Grossery Data to understand the establishment and Customer preference.",
    Previewlink: "https://mavenanalytics.io/project/17613",
    Githublink: "https://github.com/karthikeyan-the-analyst/Blinkit-Analysis",
  },
  /*{
    title: "",
    cardImage: "assets/images/project-page/poker.jpg",
    description: "Poker game built using typescript.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Calculator",
    cardImage: "https://user-images.githubusercontent.com/85881386/202843117-170ac07b-82e8-487e-9c4c-95eb7001396f.png",
    description:
      "Designed using HTML, This tool helps you to solve all your simple math problems",
    Previewlink: "https://www.youtube.com/watch?v=8Ofo0Pv-JAs",
    Githublink: "https://github.com/jagadekmeesala/Calculator-Tool",
  },
  {
    title: "Resume Builder",
    cardImage: "https://user-images.githubusercontent.com/85881386/285359024-78569559-84fc-43ed-bd02-0d8f5e7487b6.jpg",
    description: "Get a perfectly structured reusme with the resume builder from python",
    Previewlink: "https://youtu.be/6RbkZqolkL4?si=nTj6wcWQ6HUf5gBN",
    Githublink: "https://github.com/jagadekmeesala/CodeAlpha_Resume_Builder",
  },
  {
    title: "Rock, Paper, Scissors",
    cardImage: "https://user-images.githubusercontent.com/85881386/285358106-177af608-2311-427b-8d22-8708ec745b34.png",
    description: "This is a python code that makes your pass time more interesting with rock, paper and scissors game.",
    Previewlink: "https://www.youtube.com/@MeesalaJagadek",
    Githublink: "https://github.com/jagadekmeesala/GAME_RockPaperScissors",
  },
  {
    title: "Instagram Logo",
    cardImage: "https://user-images.githubusercontent.com/85881386/285358508-12b11534-dadf-47a0-b9e1-9473ed720e75.jpg",
    description: "Built using Python - tkinter module.",
    Previewlink: "https://www.youtube.com/@MeesalaJagadek",
    Githublink: "https://github.com/jagadekmeesala/INSTAGRAM-LOGO",
  }, */
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
