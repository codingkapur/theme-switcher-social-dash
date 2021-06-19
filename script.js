const checkbox = document.querySelector(".checkbox");
const toggleLabel = document.querySelector(".checkbox-label");
const toggleBall = document.querySelector(".toggle-ball");
const bgDesignElement = document.querySelector(".bg-design-element");
const section1MainHeading = document.querySelector(".section-1__main-heading");
const section1Subtext = document.querySelector(".section-1__subtext");
const themeIndicator = document.querySelector(".toggle-label");
const bigNumber = document.querySelectorAll(".big-number");
const section2Cards = document.querySelectorAll(".section-2__card");
const section4Cards =document.querySelectorAll(".section-4__card");
const section4CardNumbers =document.querySelectorAll(".section-4__card-bottom-section-number");


const body = document.body;
checkbox.checked = false;

const pageTheme = function(){
    if (!checkbox.checked) {
        bgDesignElement.classList.add("dark");
        section1MainHeading.classList.add("dark");
        section1Subtext.classList.add("dark");
themeIndicator.classList.add("dark");
bigNumber.forEach(x=> x.classList.add("dark"));
section2Cards.forEach(x=> x.classList.add("dark"));
body.classList.add("dark");
section4Cards.forEach(x=> x.classList.add("dark"));
section4CardNumbers.forEach(x=> x.classList.add("dark"));


      } else {
        bgDesignElement.classList.remove("dark");
        section1MainHeading.classList.remove("dark");
        section1Subtext.classList.remove("dark");
themeIndicator.classList.remove("dark");
bigNumber.forEach(x=> x.classList.remove("dark"));
section2Cards.forEach(x=> x.classList.remove("dark"));
body.classList.remove("dark");
section4Cards.forEach(x=> x.classList.remove("dark"));
section4CardNumbers.forEach(x=> x.classList.remove("dark"));



        
      }
}

toggleBall.addEventListener('click',pageTheme);
toggleLabel.addEventListener('click',pageTheme);
