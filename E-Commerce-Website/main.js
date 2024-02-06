let dayItem = document.querySelector("#day");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
  let futureDate = new Date("21 November 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let day = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  dayItem.innerHTML = day;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};

countDown();
setInterval(countDown, 1000);

function scrollTopBack() {
  let scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 250) {
      scrollTopButton.classList.add("scrollActive");
    } else {
      scrollTopButton.classList.remove("scrollActive");
    }
  };
}
scrollTopBack();

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});



document.getElementById("myBtn").addEventListener("click", function() {
    alert("Form Submitted Successfully");
  });

document.getElementById("myBtn1").addEventListener("click", function() {
    alert("Added to Cart");
  });
  