let navBar = document.querySelector("header .navbar");
let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

let mainVideo = document.querySelector(".main-video");
let closeBtn = document.querySelector(".fa-xmark");
let videoMain = document.querySelector(".main-video .video video");

document
  .querySelectorAll(".corse3 .container .box .video video")
  .forEach(vid => {
    vid.addEventListener("click", () => {
      let src = vid.getAttribute("src");
      videoMain.src = src;
      mainVideo.classList.add("active");
    });
  });
closeBtn.onclick = () => {
  mainVideo.classList.remove("active");
};
