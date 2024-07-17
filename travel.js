//window loading

let allElement = document.querySelector(".main");

// window.onload=function(event){

window.onload = (event) => {
  let width = 0,
    height = 0;
  const myInterval = setInterval(myTimer, 5);
  function myTimer() {
    if (height == 100) {
      clearInterval(myInterval);
    } else {
      height++;
      width++;
      allElement.style.width = width + "%";
      allElement.style.height = height + "%";
    }
  }
};

//scroll top

let myMain = document.querySelector(".main1");

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop);
  // myMain.style.height=-scrollTop+100+'px'
  // myMain.style.marginTop=-scrollTop+50+'px'
});

///ange up and down
let myangle = document.querySelector(".angle");

let rotation = 0;

myangle.addEventListener("click", function () {
  rotation = (rotation + 180) % 360;
  console.log(rotation);
  myangle.style.transform = `rotateX(${rotation}deg)`;
  myangle.style.transition = "transform 1.5s";

  // myangle.style.transform='rotateX(180deg)'
});

//circle

let mycircleBox = document.querySelector(".circleBox");

let mycircleBigest = document.querySelector(".circleBigest");

let mycircleBig = document.querySelector(".circleBig");

let mycircleSmall = document.querySelector(".circleSmall");

mycircleBox.addEventListener("mouseenter", function () {
  mycircleBigest.style.display = "block";
  mycircleBigest.style.animation = "cicleShadow 2s infinite";
  mycircleBigest.style.backgroundSize = "contain";
  mycircleBigest.style.backgroundImage = "url('./image/background.jpeg')";
  mycircleBig.style.backgroundColor = "#fff";
  mycircleSmall.style.backgroundColor = "#131150";
  allElement.style.opacity = "0.8";

  // mycircleBig.style.backgroundColor="#"
});

mycircleBox.addEventListener("mouseleave", function () {
  mycircleBigest.style.display = "none";
  mycircleBigest.style.animation = "";
  mycircleSmall.style.animation = "";
  mycircleBigest.style.backgroundImage = "";
  allElement.style.opacity = "";
  mycircleBig.style.backgroundColor = "";
  mycircleSmall.style.backgroundColor = "";

  // mycircleBig.style.display="block"
});

//top navigation :dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

let myDropBtn = document.getElementById("dropBtn");
let mydropContent = document.querySelector(".dropContent");

// mydropContent must be have a class name
myDropBtn.addEventListener("click", function (event) {
  mydropContent.classList.toggle("showing");
  mycircleBox.style.display = "none";
});

//Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("#dropBtn")) {
    if (mydropContent.classList.contains("showing")) {
      mydropContent.classList.remove("showing");
    }
    mycircleBox.style.display = "block";
  }
};

let myLocationName = document.getElementsByClassName("locationName");
let myLocationDark = document.getElementsByClassName("locationDark");

//location1
let myLocation1 = document.querySelector(".location1");

myLocation1.addEventListener("mouseenter", function (event) {
  myLocation1.style.backgroundImage = "url('./image/france.jpeg')";
  myLocation1.style.backgroundSize = "cover";
  myLocation1.style.transform = "scale(1.1)";
  myLocationName[0].style.color = "#fff";
  myLocationDark[0].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

myLocation1.addEventListener("mouseleave", function (event) {
  myLocation1.style.backgroundImage = "";
  myLocationName[0].style.color = "black";
  myLocation1.style.transform = "scale(1)";
  myLocationDark[0].style.backgroundColor = "";
});

//location2
let myLocation2 = document.querySelector(".location2");

myLocation2.addEventListener("mouseenter", function (event) {
  myLocation2.style.background = "url('./image/Indonesia.jpeg')";
  myLocation2.style.backgroundSize = "cover";
  myLocation2.style.transform = "scale(1.1)";
  myLocationName[1].style.color = "#fff";
  myLocationDark[1].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

myLocation2.addEventListener("mouseleave", function (event) {
  myLocation2.style.backgroundImage = "";
  myLocationName[1].style.color = "black";
  myLocation2.style.transform = "scale(1)";
  myLocationDark[1].style.backgroundColor = "";
});

//location3
let myLocation3 = document.querySelector(".location3");

myLocation3.addEventListener("mouseenter", function (event) {
  myLocation3.style.background = "url('./image/Grace.jpeg')";
  myLocation3.style.backgroundSize = "cover";
  myLocation3.style.transform = "scale(1.1)";
  myLocationName[2].style.color = "#fff";
  myLocationDark[2].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

myLocation3.addEventListener("mouseleave", function (event) {
  myLocation3.style.backgroundImage = "";
  myLocationName[2].style.color = "black";
  myLocation3.style.transform = "scale(1)";
  myLocationDark[2].style.backgroundColor = "";
});

//location4
let myLocation4 = document.querySelector(".location4");

myLocation4.addEventListener("mouseenter", function (event) {
  myLocation4.style.background = "url('./image/Egypt.jpeg')";
  myLocation4.style.backgroundSize = "cover";
  myLocation4.style.transform = "scale(1.1)";
  myLocationName[3].style.color = "#fff";
});

myLocation4.addEventListener("mouseleave", function (event) {
  myLocation4.style.backgroundImage = "";
  myLocationName[3].style.color = "black";
  myLocation4.style.transform = "scale(1)";
});

/// main3 change the paragraph button
let myarrowLeft3 = document.querySelector("#arrowLeft3");
let myarrowRight3 = document.querySelector("#arrowRight3");
let mycaptions = document.getElementsByClassName("caption");
let index = 0;
let mypara = document.querySelector(".para");
console.log(mycaptions[0]);
console.log(mycaptions[1]);

myarrowLeft3.addEventListener("click", function () {
  for (let i = 0; i < mycaptions.length; i++) {
    mycaptions[i].style.display = "none";
  }

  if ((index > 0) & (index < mycaptions.length)) {
    index--;
  } else if (index == 0) {
    index = mycaptions.length - 1;
  }

  console.log(index);
  mycaptions[index].style.display = "block";
  mycaptions[index].style.animation =
    "fadeAndScale 1.5s cubic-bezier(0.1, 0.84, 0.44, 1)";

  //add parapgrah animation
  mypara.classList.add("animate");
  setTimeout(() => {
    mypara.classList.remove("animate");
  }, 1000);
});

// mycaptions[index].classList.remove("caption")
// mycaptions[index].classList.add("caption")
//mypara.style.animation = "fadeAndScale 1.5s cubic-bezier(0.1, 0.84, 0.44, 1)";
// void mycaptions[index].offsetWidth
// void mypara.offsetWidth

myarrowRight3.addEventListener("click", function () {
  for (let i = 0; i < mycaptions.length; i++) {
    mycaptions[i].style.display = "none";
  }

  if (index < mycaptions.length - 1) {
    index++;
  } else if (index == mycaptions.length - 1) {
    index = 0;
  }
  console.log(index);
  mycaptions[index].style.display = "block";
  mycaptions[index].style.animation =
    "fadeAndScale 1.5s cubic-bezier(0.1, 0.84, 0.44, 1)";

  //add parapgrah animation
  mypara.classList.add("animate");
  setTimeout(() => {
    mypara.classList.remove("animate");
  }, 1000);
});

// border animation
let mybtn1 = document.getElementById("btn1");
let mybtn2 = document.getElementById("btn2");
let mybtn3 = document.getElementById("btn3");
let mybtn4 = document.getElementById("btn4");
let getBar1 = document.getElementById("myBar1");
let getBar2 = document.getElementById("myBar2");
let getBar3 = document.getElementById("myBar3");
let getBar4 = document.getElementById("myBar4");

let imageArray = [
  "./image/Egypt.jpeg",
  "./image/Grace.jpeg",
  "./image/Indonesia.jpeg",
  "./image/france.jpeg",
  "./image/1.jpeg",
  "./image/2.jpeg",
  "./image/3.jpeg",
  "./image/4.jpeg",
  "./image/5.jpeg",
];

let myimg1 = document.querySelector(".img1 ");
let myimg2 = document.querySelector(".img2 ");
let myimg3 = document.querySelector(".img3 ");

let myimgs = document.getElementsByClassName("imgs");

// get array of class, queryselector only get one class
//The getElementsByClassName returns an array-like object of all child elements
let mybtnB = document.querySelectorAll(".btnB");

mybtn1.addEventListener("click", function () {
  //image

  myimg1.style.backgroundImage = `url(${imageArray[0]})`;
  myimg1.style.backgroundSize = "cover";
  myimg2.style.backgroundImage = `url(${imageArray[4]})`;
  myimg2.style.backgroundSize = "cover";
  myimg3.style.backgroundImage = `url(${imageArray[5]})`;
  myimg3.style.backgroundSize = "cover";

  //circle
  mybtnB[0].style.display = "block";
  mybtnB[0].style.animation = "circleChange 0.5s ease-out";

  for (let i = 1; i < mybtnB.length; i++) {
    mybtnB[i].style.display = "none";
  }

  //length decrease
  getBar4.style.animation = "progressBarReduce 0.5s ease-out";

  const myTimeout4 = setTimeout(() => {
    getBar4.style.display = "none";
    getBar3.style.animation = "progressBarReduce 0.5s ease-out";
  }, 500);

  const myTimeout3 = setTimeout(() => {
    getBar3.style.display = "none";
    getBar2.style.animation = "progressBarReduce 0.5s ease-out";
  }, 1000);

  const myTimeout2 = setTimeout(() => {
    getBar2.style.display = "none";
  }, 1500);

  //2s later display none
  //To clear a timeout, use the id returned from setTimeout():
  //clearTimeout(myTimeout)
});

mybtn2.addEventListener("click", function () {
  //img

  myimg1.style.backgroundImage = `url(${imageArray[1]})`;
  myimg1.style.backgroundSize = "cover";
  myimg2.style.backgroundImage = `url(${imageArray[5]})`;
  myimg2.style.backgroundSize = "cover";
  myimg3.style.backgroundImage = `url(${imageArray[6]})`;
  myimg3.style.backgroundSize = "cover";

  //circle change

  for (let i = 0; i < mybtnB.length; i++) {
    mybtnB[i].style.display = "none";
  }

  mybtnB[1].style.display = "block";
  mybtnB[1].style.animation = "circleChange 0.5s ease-out";

  //length increase
  getBar2.style.display = "block";
  getBar2.style.animation = "progressBarAdd 0.5s ease-out";

  //length decrease
  getBar4.style.animation = "progressBarReduce 0.5s ease-out";

  const myTimeout4 = setTimeout(() => {
    getBar4.style.display = "none";
    getBar3.style.animation = "progressBarReduce 0.5s ease-out";
  }, 500);

  const myTimeout3 = setTimeout(() => {
    getBar3.style.display = "none";
  }, 1000);
});

mybtn3.addEventListener("click", function () {
  myimg1.style.backgroundImage = `url(${imageArray[2]})`;
  myimg1.style.backgroundSize = "cover";
  myimg2.style.backgroundImage = `url(${imageArray[6]})`;
  myimg2.style.backgroundSize = "cover";
  myimg3.style.backgroundImage = `url(${imageArray[7]})`;
  myimg3.style.backgroundSize = "cover";

  for (let i = 0; i < mybtnB.length; i++) {
    mybtnB[i].style.display = "none";
  }

  mybtnB[2].style.display = "block";
  mybtnB[2].style.animation = "circleChange 0.5s ease-out";

  //longer bar

  //bar2 increase length first before bar3 increment

  // if (
  //   getBar3.style.display == "none"
  //   // (getBar2.style.display === "block")
  // ) {
  // getBar3.style.display = "block";
  // getBar3.style.animation = "progressBarAdd 1s linear";
  // console.log("1");

  // } else if (
  //   (getBar2.style.display === "none") &
  //   (getBar3.style.display === "none")
  // ) {
  getBar2.style.display = "block";
  getBar2.style.animation = "progressBarAdd 0.5s ease-out";

  const myTimeout3 = setTimeout(() => {
    getBar3.style.display = "block";
    getBar3.style.animation = "progressBarAdd 0.5s ease-out";
  }, 500);
  // } else if (
  //   getBar4.style.display == "block" &&
  //   getBar2.style.display == "block" &&
  //   getBar3.style.display == "block"
  // ) {

  //leng--
  getBar4.style.animation = "progressBarReduce 0.5s ease-out";
  const myTimeout4 = setTimeout(barShorter, 500);
  function barShorter() {
    getBar4.style.display = "none";
  }
  // }
});

mybtn4.addEventListener("click", function () {
  for (let i = 0; i < mybtnB.length; i++) {
    mybtnB[i].style.display = "none";
  }

  mybtnB[3].style.display = "block";
  mybtnB[3].style.animation = "circleChange 0.5s ease-out";

  //length increase
  getBar2.style.display = "block";
  getBar2.style.animation = "progressBarAdd 0.5s ease-out";

  const myTimeout3 = setTimeout(() => {
    getBar3.style.display = "block";
    getBar3.style.animation = "progressBarAdd 0.5s ease-out";
  }, 500);

  const myTimeout4 = setTimeout(function () {
    getBar4.style.display = "block";
    getBar4.style.animation = "progressBarAdd 0.5s ease-out";
  }, 1000);

  //image

  myimg1.style.backgroundImage = `url(${imageArray[3]})`;
  myimg1.style.backgroundSize = "cover";
  myimg2.style.backgroundImage = `url(${imageArray[8]})`;
  myimg2.style.backgroundSize = "cover";
  myimg3.style.backgroundImage = `url(${imageArray[6]})`;
  myimg3.style.backgroundSize = "cover";
});

let slide = document.querySelectorAll(".slide");
let slidebox = document.querySelector(".slideBox");
let darks = document.querySelectorAll(".dark");
console.log(slide);

// -50 means goes to different direction
slide.forEach((item, index) => {
  item.addEventListener("mouseover", function () {
    slidebox.style.transform = `translateX(${index * -140}px)`;
    darks[index].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
  });

  item.addEventListener("mouseout", function () {
    slidebox.style.transform = `tranlateX(${index * 200}px)`;
    darks[index].style.backgroundColor = "";
  });
});

//sticky box

//first method add sticky in css--the easiest way
//second method use style.position = "sticky" in js;
//third method use classList.add

//Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
//The pageYOffset/window.scrollY property returns the pixels a document has scrolled from the upper left corner of the window.The pageYOffset/window.scrollY property is equal to the scrollY property.

let stickyBox = document.querySelector(".leftBox");

let boxPosition = stickyBox.offsetTop;

console.log("box position", boxPosition);
//4200 position + 1200 height of parent box

//second method

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  //scrollTop=window.scrollY
  let distance = window.scrollY - boxPosition;
  // if (scrollTop > boxPosition && scrollTop < boxPosition + 650)
  //stickyBox.height is 650
  //if (scrollTop > 4200 && distance < 4900)
  if (distance > 0 && distance < 800) {
    stickyBox.style.position = "sticky";
    stickyBox.style.top = "10px";
    // stickyBox.style.top = `${distance}px`;
    console.log(scrollTop, window.scrollY);
  }
});

//third method
//use the function in <body onscroll="stickFun()">

// function stickFun() {
//   let distance = window.scrollY - boxPosition;
//   if (distance > 0 && distance < 1200) {
//     stickyBox.classList.add("stickyClass");
//     console.log("distance", distance);
//   } else {
//     stickyBox.classList.remove("stickyClass");
//   }
// }

let getRArrowbox = document.querySelector(".RArrowbox");
let getLArrowbox = document.querySelector(".LArrowbox");
let getHeading = document.querySelector("#heading");
let getSubhead = document.querySelector("#subheading");
let getmain1 = document.querySelector(".main1");

let headArray = [
  "Thessaloniki,Greece",
  "Denpasar,Indonesia",
  "Bahariya Oasis,Egypt",
];

let subheadArray = [
  "STARTING AT $ 6700",
  "STARTING AT $ 1900",
  "STARTING AT $ 6400",
];

let backgroundArray = [
  "./image/Greece.jpeg",
  "./image/Indonesia2.jpeg",
  "./image/Egypt2.jpeg",
];
let index_head = 0;
let index_sub = 0;
let index_img = 0;

getRArrowbox.addEventListener("click", function () {
  //heading
  if ((index_head >= 0) & (index_head < headArray.length - 1)) {
    index_head += 1;
    getHeading.innerHTML = `${headArray[index_head]}`;
    getHeading.classList.add("animate");
    setTimeout(() => {
      getHeading.classList.remove("animate");
    }, 1000);
  } else if (index_head === headArray.length - 1) {
    index_head = 0;
    getHeading.innerHTML = `${headArray[index_head]}`;
  }

  //add animation for heading
  getHeading.classList.add("animate");
  setTimeout(() => {
    getHeading.classList.remove("animate");
  }, 1000);

  //subheading
  if ((index_sub >= 0) & (index_sub < subheadArray.length - 1)) {
    index_sub += 1;
    getSubhead.innerHTML = `${subheadArray[index_sub]}`;
  } else if (index_sub === subheadArray.length - 1) {
    index_sub = 0;
    getSubhead.innerHTML = `${subheadArray[index_sub]}`;
  }

  //add animation for subheading
  getSubhead.classList.add("animate");
  setTimeout(() => {
    getSubhead.classList.remove("animate");
  }, 1000);

  //image
  if ((index_img >= 0) & (index_img < backgroundArray.length - 1)) {
    index_img += 1;
    getmain1.style.backgroundImage = `url(${backgroundArray[index_img]})`;
    getmain1.style.backgroundSize = "cover";
  } else if (index_img === backgroundArray.length - 1) {
    index_img = 0;
    getmain1.style.backgroundImage = `url(${backgroundArray[index_img]})`;
    getmain1.style.backgroundSize = "cover";
  }

  getmain1.classList.add("pageFlip");
  setTimeout(() => {
    getmain1.classList.remove("pageFlip");
  }, 1000);
});

getLArrowbox.addEventListener("click", function () {
  //heading
  if ((index_head > 0) & (index_head < headArray.length)) {
    index_head -= 1;
    getHeading.innerHTML = `${headArray[index_head]}`;
  } else if (index_head === 0) {
    index_head = headArray.length - 1;
    getHeading.innerHTML = `${headArray[index_head]}`;
  }

  //add animation for heading
  getHeading.classList.add("animate");
  setTimeout(() => {
    getHeading.classList.remove("animate");
  }, 1000);

  //subheading
  if ((index_sub > 0) & (index_sub < subheadArray.length)) {
    index_sub -= 1;
    getSubhead.innerHTML = `${subheadArray[index_sub]}`;
  } else if (index_sub === 0) {
    index_sub = headArray.length - 1;
    getSubhead.innerHTML = `${subheadArray[index_sub]}`;
  }

  //add animation for subheading
  getSubhead.classList.add("animate");
  setTimeout(() => {
    getSubhead.classList.remove("animate");
  }, 1000);

  // image
  if ((index_img > 0) & (index_img < backgroundArray.length)) {
    index_img -= 1;
    getmain1.style.backgroundImage = `url(${backgroundArray[index_img]})`;
    getmain1.style.backgroundSize = "cover";
    getmain1.classList.add("overlay");
  } else if (index_img === 0) {
    index_img = backgroundArray.length - 1;
    getmain1.style.backgroundImage = `url(${backgroundArray[index_img]})`;
    getmain1.style.backgroundSize = "cover";
  }
  getmain1.classList.add("pageFlip");
  setTimeout(() => {
    getmain1.classList.remove("pageFlip");
  }, 1000);
});

//side navigation
let continentArray = [
  "./image/Egypt2.jpeg",
  "./image/Indonesia.jpeg",
  "./image/Grace.jpeg",
];

let getContinent = document.querySelectorAll(".continent");
let getAsia = document.getElementById("Asia");
let getEurope = document.getElementById("Europe");
let getAfrica = document.getElementById("Africa");
let mycontinentName = document.querySelectorAll(".continentName");
let myOverlay = document.querySelectorAll(".overlay");

console.log(getContinent[0]);

//mouseover
getContinent.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    item.style.backgroundSize = "cover";
    item.style.transform = "scale(1.1)";
    item.style.transition = "transform 1s";
    // getAsia.style.backgroundRepeat = "no-repeat";
  });
});

getAfrica.addEventListener("mouseenter", function () {
  getAfrica.style.backgroundImage = `url(${continentArray[0]})`;
  mycontinentName[0].style.color = "#fff";
  myOverlay[0].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

getAsia.addEventListener("mouseenter", function () {
  getAsia.style.backgroundImage = `url(${continentArray[1]})`;
  mycontinentName[1].style.color = "#fff";
  myOverlay[1].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

getEurope.addEventListener("mouseenter", function () {
  getEurope.style.backgroundImage = `url(${continentArray[2]})`;
  mycontinentName[2].style.color = "#fff";
  myOverlay[2].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

//mouse leave

getContinent.forEach((item, index) => {
  item.addEventListener("mouseleave", function () {
    item.style.backgroundSize = "";
    item.style.transform = "scale(1)";
  });
});
getAfrica.addEventListener("mouseleave", function () {
  getAfrica.style.backgroundImage = "";
  mycontinentName[0].style.color = "black";
  myOverlay[0].style.backgroundColor = "";
});

getAsia.addEventListener("mouseleave", function () {
  getAsia.style.backgroundImage = "";
  mycontinentName[1].style.color = "black";
  myOverlay[1].style.backgroundColor = "";
});

getEurope.addEventListener("mouseleave", function () {
  getEurope.style.backgroundImage = "";
  mycontinentName[2].style.color = "black";
  myOverlay[2].style.backgroundColor = "";
});

// destination animation
let mydestinationName = document.querySelectorAll(".destinationName");
let getdestination = document.querySelectorAll(".destination");
let getFrance = document.getElementById("France");
let getIndonesia = document.getElementById("Indonesia");
let getGreece = document.getElementById("Greece");
let getEgypt = document.getElementById("Egypt");

let destinationArray = [
  "./image/france.jpeg",
  "./image/Indonesia.jpeg",
  "./image/Grace.jpeg",
  "./image/Egypt.jpeg",
];

//mouseover
getdestination.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    item.style.backgroundSize = "cover";
    item.style.transform = "scale(1.1)";
    item.style.transition = "transform 1s";
  });
});

getFrance.addEventListener("mouseenter", function () {
  getFrance.style.backgroundImage = `url(${destinationArray[0]})`;
  mydestinationName[0].style.color = "#fff";
  myOverlay[3].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

getIndonesia.addEventListener("mouseenter", function () {
  getIndonesia.style.backgroundImage = `url(${destinationArray[1]})`;
  mydestinationName[1].style.color = "#fff";
  myOverlay[4].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

getGreece.addEventListener("mouseenter", function () {
  getGreece.style.backgroundImage = `url(${destinationArray[2]})`;
  mydestinationName[2].style.color = "#fff";
  myOverlay[5].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

getEgypt.addEventListener("mouseenter", function () {
  getEgypt.style.backgroundImage = `url(${destinationArray[3]})`;
  mydestinationName[3].style.color = "#fff";
  myOverlay[6].style.backgroundColor = "rgba(15, 19, 38, 0.55)";
});

//mouse leave

getFrance.addEventListener("mouseleave", function () {
  getFrance.style.backgroundImage = "";
  mydestinationName[0].style.color = "black";
  myOverlay[3].style.backgroundColor = "";
});

getIndonesia.addEventListener("mouseleave", function () {
  getIndonesia.style.backgroundImage = "";
  mydestinationName[1].style.color = "black";
  myOverlay[4].style.backgroundColor = "";
});

getGreece.addEventListener("mouseleave", function () {
  getGreece.style.backgroundImage = "";
  mydestinationName[2].style.color = "black";
  myOverlay[5].style.backgroundColor = "";
});

getEgypt.addEventListener("mouseleave", function () {
  getEgypt.style.backgroundImage = "";
  mydestinationName[3].style.color = "black";
  myOverlay[6].style.backgroundColor = "";
});

getdestination.forEach((item, index) => {
  item.addEventListener("mouseleave", function () {
    item.style.transform = "scale(1)";
  });
});

let getopenMenu = document.getElementById("openMenu");
let getsideNav = document.querySelector(".sideNav");
let geticonOpen = document.getElementById("iconOpen");
let geticonClose = document.getElementById("iconClose");

geticonOpen.addEventListener("click", function () {
  getsideNav.style.display = "block";
  getopenMenu.classList.add("sideNav");
  getsideNav.style.animation = "wideIncrease 0.5s linear";
  // getopenMenu.style.display = "none";
});

geticonClose.addEventListener("click", function () {
  getsideNav.style.animation = "wideDecrease 0.5s linear";
  setTimeout(() => {
    getsideNav.style.display = "none";
    getopenMenu.classList.remove("sideNav");
  }, 500);
});
