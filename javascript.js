const category = document.querySelector(".main__category-btn");
const ulList = document.querySelector(".main__category-list");
const linkList = ulList.querySelectorAll(".main__category-items");
let isNone = false;
category.addEventListener("click", function () {
  if (!isNone) {
    ulList.style.animation = "openUl ease-in 0.3s";
    ulList.style.height = "433px";
    ulList.style.display = "block";
    linkList.forEach((el) => {
      el.style.animation = "moveBot ease-in 0.3s";
    });
  } else {
    ulList.style.animation = "closeUl ease-in 0.5s";
    ulList.style.height = 0;
    linkList.forEach((el) => {
      el.style.animation = "moveTop ease-in 0.5s";
    });
  }
  isNone = !isNone;
});

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// });

// var owl = $(".owl-carousel");
// owl.owlCarousel({
//   items: 4,
//   loop: true,
//   margin: 10,
//   nav: true,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayHoverPause: true,
// });

$(".categories__slider").owlCarousel({
  loop: true,
  margin: 36,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  smartSpeed: 900,
  responsive: {
    0: {
      items: 2,
      nav: true,
      loop: true,
    },
    600: {
      items: 3,
      nav: true,
      loop: true,
    },
    800: {
      items: 3,
      nav: true,
      loop: true,
    },
    1100: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

$(".product__type-slider").owlCarousel({
  loop: true,
  margin: 36,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  responsiveClass: true,
  smartSpeed: 900,
  items: 1,
  dots: false,
  dragEndSpeed: true,
  // responsive: {
  //   0: {
  //     items: 2,
  //     nav: false,
  //     loop: true,
  //   },
  //   600: {
  //     items: 3,
  //     nav: true,
  //     loop: true,
  //   },
  //   800: {
  //     items: 3,
  //     nav: true,
  //     loop: true,
  //   },
  //   1100: {
  //     items: 1,
  //     nav: true,
  //     loop: true,
  //   },
  // },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

const filter = function (imgClass) {
  const img = document.querySelectorAll(`${imgClass}`);
  img.forEach((element) => {
    const hhh = element;
    hhh.classList.add("show");
    hhh.classList.remove("hide");
  });
  const conlai = document.querySelectorAll(`.all:not(${imgClass})`);
  conlai.forEach((el) => {
    el.classList.add("hide");
    el.classList.remove("show");
  });
};

const ulProduct = document.querySelector(".featured__heading-selection");
ulProduct.addEventListener("click", function (e) {
  if (!e.target.dataset.filter) {
    return;
  }
  const featured__item = document.querySelectorAll(".featured__heading-item");
  featured__item.forEach((el) => {
    if (e.target === el) {
      el.classList.add("featured__heading-item--active");
    } else {
      el.classList.remove("featured__heading-item--active");
    }
  });
  const imgClass = e.target.dataset.filter;
  filter(imgClass);
});

const btnBarOpen = document.querySelector(".header__bottom-bar");
const btnBarClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
console.log(body);
console.log(modal);
const openModal = function () {
  modal.style.transform = "translateX(0)";
  modal.style.left = "0";
  overlay.classList.remove("hidden");
  body.style.height = "100%";
  body.style.overflow = "hidden";
};
const closeModal = function () {
  modal.style.transform = "translateX(-120%)";
  overlay.classList.add("hidden");
  body.style.height = "initial";
  body.style.overflow = "initial";
};
btnBarOpen.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
btnBarClose.addEventListener("click", closeModal);
