// window.addEventListener("resize", function () {
//   if (window.innerWidth < 767) {
//     const serviceSlider = new Swiper(".services__slider", {
//       slidesPerView: 1,
//       spaceBetween: 30,

//       pagination: {
//         el: ".swiper-pagination",
//       },

//       breakpoints: {
//         495: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         1024: {
//           slidesPerView: 4,
//           spaceBetween: 30,
//         },
//         1200: {
//           allowTouchMove: false,
//         },
//       },
//     });
//   } else {
//     swiper.destroy();
//   }
// });

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia("(min-width: 767px)");
// keep track of swiper instances to destroy later
let serviceSlider;

const breakpointChecker = function () {
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches === true) {
    // clean up old instances and inline styles when available
    if (serviceSlider !== undefined) serviceSlider.destroy(true, true);
    // or/and do nothing
    return;
    // else if a small viewport and single column layout needed
  } else if (breakpoint.matches === false) {
    // fire small viewport version of swiper
    return enableSwiper();
  }
};

const enableSwiper = function () {
  const serviceSlider = new Swiper(".services__slider", {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
      495: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
      },
    },
  });
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);

breakpointChecker();

let portfolioSlider = new Swiper(".portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    495: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

let researchSlider = new Swiper(".stages-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    495: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      pagination: {
        el: null,
      },
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 62,
    },
  },
});

let documentsSlider = new Swiper(".documents-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    495: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      pagination: {
        el: null,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

let partnersSlider = new Swiper(".partners-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    495: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 92,
    },
  },
});

let collectiveSlider = new Swiper(".collective__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    495: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

let articleSlider = new Swiper(".article-slider", {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    495: {
      slidesPerView: 1.5,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header-bottom");

console.log(burger, menu);
const showMenu = function () {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
};

if (burger) {
  showMenu();
}

let text = document.querySelectorAll(".js-text-hidden");
let textShow = document.querySelectorAll(".js-show-text");

const initShowText = function () {
  console.log("111", text, textShow);
  for (let i = 0; i < text.length; i++) {
    textShow[i].addEventListener("click", function () {
      textShow[i].classList.toggle("active");
      text[i].classList.toggle("active");
    });
  }
};
if (text) {
  initShowText();
}

let acc = document.querySelectorAll(".faq__item-title");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("faq__item-title--open");
    let item = this.nextElementSibling;
    if (item.style.display === "none") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

let associateSlider = new Swiper(".associate__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__slide-next",
    prevEl: ".btn__slide-prev",
  },
  breakpoints: {
    495: {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".btn__slide-next",
        prevEl: ".btn__slide-prev",
      },
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

let certificateSlider = new Swiper(".certificate__slider", {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    495: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

let mediaSlider = new Swiper(".mass-media__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__slide-next",
    prevEl: ".btn__slide-prev",
  },

  breakpoints: {
    495: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      allowTouchMove: false,
      navigation: {
        nextEl: false,
        prevEl: false,
      },
    },
  },
});

let ideologySlider = new Swiper(".ideology__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    495: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      allowTouchMove: false,
    },
  },
});

let interviewsSlider = new Swiper(".worldview-interviews__slider", {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    495: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let projectSlider = new Swiper(".project__slider", {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    495: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let pairsSlider = new Swiper(".pairs__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    495: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      allowTouchMove: false,
    },

    1199: {
      allowTouchMove: false,
    },
  },
});
