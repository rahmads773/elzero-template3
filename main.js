// mega menu
const other_links = document.getElementById("other-links");
const mega_menu = document.querySelector("header .mega-menu");
other_links.addEventListener("mouseover", (eo) => {
  // mega_menu.classList.add("active_menu")
  mega_menu.style.opacity = "1";
  mega_menu.style.zIndex = "100";
  mega_menu.style.top = "100%";
});
other_links.addEventListener("mouseout", (eo) => {
  // mega_menu.classList.remove("active_menu")
  mega_menu.style.opacity = "0";
  mega_menu.style.zIndex = "-1";
  mega_menu.style.top = "calc(100% + 50px)";
});
// progress on scroll
const skills_section = document.getElementById("our-skills");
const spans = document.querySelectorAll(".our-skills  .skill .progress span");
const h3 = document.querySelectorAll(".our-skills  .skill h3");
window.onscroll = () => {
  if (window.scrollY >= skills_section.offsetTop - 200) {
    spans.forEach((item) => {
      item.style.width = item.dataset.width;
    });
    h3.forEach((item) => {
      item.style.opacity = "1";
      item.style.top = "0";
    });
  }
  // counter on scroll
  if (window.scrollY >= stats_section.offsetTop - 300) {
    if (!start){
      
      numbers.forEach((item) => {
        counters(item);
      });
    }
    start = true ;
  }
};
// count down

let goal_date = new Date("jan 22, 2022 23:59:59").getTime();
let counter = setInterval(
  () => {
    let now_time = new Date().getTime();

    let time_diff = goal_date - now_time;
    // console.log(time_diff);
    //   get time units
    let day = Math.floor(time_diff / (1000 * 60 * 60 * 24));
    let hour = Math.floor(
      (time_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minute = Math.floor((time_diff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((time_diff % (1000 * 60)) / 1000);
    // console.log(day)

    let days = document.getElementById("day");
    days.innerHTML = day < 10 ? `0${day}` : day;
    let hours = document.getElementById("hour");
    hours.innerHTML = hour < 10 ? `0${hour}` : hour;
    let minutes = document.getElementById("minute");
    minutes.innerHTML = minute < 10 ? `0${minute}` : minute;
    let seconds = document.getElementById("second");
    seconds.innerHTML = second < 10 ? `0${second}` : second;

    if (time_diff == 0) {
      clearInterval(counter);
    }
  },

  1000
);

// change videos
const lists = document.querySelectorAll(".videos .links ul li");
const video = document.getElementById("video");
const videos_ul = document.getElementById("videos-ul");
const change = document.getElementById("change");
const videos = [
  "img/video1.jpg",
  "img/video2.jpg",
  "img/video3.jpg",
  "img/video4.jpg",
  "img/video5.jpg",
  "img/video6.jpg",
  "img/video7.jpg",
];
lists.forEach((item, index) => {
  item.addEventListener("click", () => {
    video.src = videos[index];
  });
});
change.addEventListener("click", (eo) => {
  const random = Math.round(Math.random() * 6);
  console.log(random);
  video.src = videos[random];
});
// counter on scroll
const numbers = document.querySelectorAll(".stats .box .number");
const stats_section = document.getElementById("stats");
let start = false;

const counters = (el) => {
  let goals = el.dataset.goal;
  let si = setInterval(() => {
    el.textContent++;
    if (el.innerHTML == goals) {
      clearInterval(si);
    }
  }, 500/goals);

};

