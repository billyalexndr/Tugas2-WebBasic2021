const splash = document.querySelector(".splash");
const salam = document.querySelector(".Salam");

document.addEventListener("DOMContentLoaded", (e) => {
  if (hours < 12){
    salam.innerHTML="Selamat Pagi!"
  } else if (hours >= 12 && hours < 15 ){
    salam.innerHTML="Selamat Siang!"
  } else if (hours >= 15 && hours < 18 ){
    salam.innerHTML="Selamat Sore!"
  } else if (hours >= 18 && hours < 24 ){
    salam.innerHTML="Selamat Malam!"
  }
  setTimeout(() => {
    splash.classList.add("none");
  }, 4000);
  setTimeout(() => {
    salam.innerHTML = "Selamat datang di SchoolStuff :)";
  }, 1500);
});