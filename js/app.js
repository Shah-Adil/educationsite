// load

const load = document.querySelector(".preloader");

window.addEventListener("load", () => {
  load.style.display = "none";
});

// img popup

$(document).ready(function () {
  // required elements
  var imgPopup = $(".img-popup");
  var imgCont = $(".gallery-img");
  var popupImage = $(".img-popup img");
  var closeBtn = $(".close-btn");

  // handle events
  imgCont.on("click", function () {
    var img_src = $(imgCont).children("img").attr("src");
    imgPopup.children("img").attr("src", img_src);
    imgPopup.addClass("opened");
  });

  $(imgPopup, closeBtn).on("click", function () {
    imgPopup.removeClass("opened");
    imgPopup.children("img").attr("src", "");
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
});

// nav

const menuBtn = document.querySelector("#menu-btn");
const menuContent = document.querySelector("header .nav");

menuBtn.addEventListener("click", () => {
  menuContent.classList.toggle("active");
  menuBtn.classList.toggle("active");
  menuBtn.classList.toggle("bx-x");
});

document.addEventListener("scroll", () => {
  menuContent.classList.remove("active");
  menuBtn.classList.remove("active");
  menuBtn.classList.remove("bx-x");
});

// qna open

const qnaBtn = document.querySelectorAll(".study-ask-btn");
// const qnaBox = document.querySelectorAll('.study-ask-card')
// const qnaPlus = document.querySelectorAll('.study-ask-icon h6')

// for (let i = 0; i < qnaBtn.length; i++) {
//     qnaBtn[i].addEventListener('click' , () => {
//       qnaBox[i].classList.toggle('active')
//       qnaBtn[i].classList.toggle('active')

//     })

// }

$(qnaBtn).click(function () {
  $(this).find("i").toggleClass("fas fa-plus fas fa-minus");
  // $(this).toggleClass('active');
});
// $('.study-ask-btn').click(function() {
//   // $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
//   $(this).toggleClass('active');
// });

//  gallery filter

let list = document.querySelectorAll(".gallery-nav a");
let listContent = document.querySelectorAll(".gallery-img");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("date-menu");

    for (let k = 0; k < listContent.length; k++) {
      listContent[k].classList.remove("active");
      listContent[k].classList.add("hide");

      if (
        listContent[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        listContent[k].classList.remove("hide");
        listContent[k].classList.add("active");
      }
    }
  });
}
