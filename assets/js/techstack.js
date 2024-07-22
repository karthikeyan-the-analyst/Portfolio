AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/Excel.png",
    langName: "Excel",
    langDesc: "<li>Excel is a spreadsheet software program developed by Microsoft, used for organizing, analyzing, and storing data in tables with calculations, charts, and graphs.</li>",
  },
  {
    langImage:"assets/images/techstack-page/MySQL.png",
    langName:"MySQL",
    langDesc:"<li>MySQL is an open-source relational database management system (RDBMS) that allows users to store, organize, and retrieve data efficiently.</li>"
  },
  {
    langImage: "assets/images/techstack-page/Python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/Numpy.png",
    langName: "Numpy",
    langDesc: "<li>NumPy is a fundamental package for numerical computing in Python, providing powerful arrays and mathematical functions.</li>",
  },
  {
    langImage: "assets/images/techstack-page/Pandas.png",
    langName: "Pandas",
    langDesc: "<li>Pandas is a Python library for data manipulation and analysis, offering powerful data structures like DataFrame and tools for handling structured data..</li>",
  },

  {
    langImage: "assets/images/techstack-page/Matpoltlib.png",
    langName: "Matplotlib",
    langDesc: "<li>Matplotlib is a Python library used for creating static, interactive, and animated visualizations in a variety of formats.</li>",
  },
  
  {
    langImage: "assets/images/techstack-page/Power BI.png",
    langName: "Power BI",
    langDesc: "<li>Power BI is a business analytics service by Microsoft that enables users to visualize and share insights from data through interactive dashboards and reports.</li>",
  },
  {
    langImage: "assets/images/techstack-page/Data Analysis.png",
    langName: "Data Analysis",
    langDesc: "<li>Data analysis involves inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making.</li>",
  },
  
  {
    langImage: "assets/images/techstack-page/MachineLearning.jpg",
    langName: "Machine Learning",
    langDesc: "<li>Machine learning is a type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed to do so</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
