gsap.registerPlugin(ScrollTrigger);

const Modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

const Modal_2 = document.querySelector("#modal_2");
const openModal_2 = document.querySelector(".open-button_2");
const closeModal_2 = document.querySelector(".close-button_2");

const Modal_3 = document.querySelector("#modal_3");
const openModal_3 = document.querySelector(".open-button_3");
const closeModal_3 = document.querySelector(".close-button_3");

const Modal_4 = document.querySelector("#modal_4");
const openModal_4 = document.querySelector(".open-button_4");
const closeModal_4 = document.querySelector(".close-button_4");

// cursor -------------------------------
const root = document.querySelector("main");

// Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

// Following extra cursor element
const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

// pop up--------------------------------
// Pop Up - modal -1
openModal.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", () => {
  modal.close();
});

// Pop Up - modal -2
openModal_2.addEventListener("click", () => {
  modal_2.showModal();
});
closeModal_2.addEventListener("click", () => {
  modal_2.close();
});

// Pop Up - modal -3
openModal_3.addEventListener("click", () => {
  modal_3.showModal();
});
closeModal_3.addEventListener("click", () => {
  modal_3.close();
});

// Pop Up - modal -4
openModal_4.addEventListener("click", () => {
  modal_4.showModal();
});
closeModal_4.addEventListener("click", () => {
  modal_4.close();
});

// To top button -------------------
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// sroll animationer ---------------------------
function srollAnimationer() {
  gsap.from(".flex_web", {
    scrollTrigger: ".flex_web",
    duration: 0.6,
    y: "10rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".om_header", {
    scrollTrigger: ".om_header",
    duration: 0.9,
    y: "20rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });
  gsap.from(".om_mig_tekst", {
    scrollTrigger: ".om_mig_tekst",
    duration: 0.9,
    y: "20rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".skills_box", {
    scrollTrigger: ".skills_box",
    duration: 0.9,
    y: "20rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".pic_af_jacob", {
    scrollTrigger: ".pic_af_jacob",
    duration: 0.9,
    y: "20rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".kontakt_tekst", {
    scrollTrigger: ".kontakt_tekst",
    duration: 0.9,
    y: "20rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".slut_pic", {
    scrollTrigger: ".slut_pic",
    duration: 0.9,
    y: "20rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".side_nav_1", {
    scrollTrigger: ".side_nav_1",
    duration: 0.4,
    y: "10rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".side_nav_2", {
    scrollTrigger: ".side_nav_2",
    duration: 0.8,
    y: "10rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });

  gsap.from(".side_nav_3", {
    scrollTrigger: ".side_nav_3",
    duration: 0.8,
    y: "10rem",
    // delay: 0.2,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "random" },
  });
}
srollAnimationer();
