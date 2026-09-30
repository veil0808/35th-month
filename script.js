// ========================================
// 35TH MONTHSARY WEBSITE
// Relationship start:
// November 1, 2023
// ========================================


// ----------------------------------------
// GET ELEMENTS
// ----------------------------------------

const flower =
  document.getElementById("flower");

const messageButton =
  document.getElementById("openMessage");

const hiddenMessage =
  document.getElementById("hiddenMessage");

const counter =
  document.getElementById("timeTogether");


// ----------------------------------------
// OPEN / CLOSE PERSONAL MESSAGE
// ----------------------------------------

messageButton.addEventListener("click", () => {

  const isOpen =
    hiddenMessage.classList.toggle("show");


  if (isOpen) {

    messageButton.textContent =
      "Close my message";

    createLoveParticles(12);

  } else {

    messageButton.textContent =
      "Open my message";

  }

});


// ----------------------------------------
// CLICK THE FLOWER
// ----------------------------------------

flower.addEventListener("click", () => {

  // Restart the animation
  flower.classList.remove("clicked");

  void flower.offsetWidth;

  flower.classList.add("clicked");

  // Create particles
  createLoveParticles(18);

});


// ----------------------------------------
// CREATE HEART / FLOWER PARTICLES
// ----------------------------------------

function createLoveParticles(amount) {

  const symbols = [
    "♥",
    "✿",
    "❤",
    "•"
  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const particle =
      document.createElement("span");


    particle.className =
      "love-particle";


    particle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    const startX =
      window.innerWidth / 2 +
      (Math.random() * 160 - 80);


    const startY =
      window.innerHeight / 2 +
      (Math.random() * 100 - 50);


    particle.style.left =
      startX + "px";


    particle.style.top =
      startY + "px";


    particle.style.setProperty(
      "--x",
      `${Math.random() * 180 - 90}px`
    );


    particle.style.setProperty(
      "--y",
      `${Math.random() * -180 - 40}px`
    );


    particle.style.setProperty(
      "--rotation",
      `${Math.random() * 360}deg`
    );


    document.body.appendChild(
      particle
    );


    setTimeout(() => {

      particle.remove();

    }, 1800);

  }

}


// ----------------------------------------
// MONTHS TOGETHER COUNTER
// ----------------------------------------

const startDate =
  new Date(2023, 10, 1);


// JavaScript months:
//
// 0 = January
// 1 = February
// ...
// 10 = November


function updateCounter() {

  const now =
    new Date();


  let years =
    now.getFullYear() -
    startDate.getFullYear();


  let months =
    now.getMonth() -
    startDate.getMonth();


  // Adjust when the current month
  // is earlier than November.

  if (months < 0) {

    years--;

    months += 12;

  }


  const totalMonths =
    years * 12 + months;


  counter.textContent =
    `${totalMonths} MONTHS OF US`;

}


updateCounter();


// ----------------------------------------
// RANDOM FLOATING FLOWERS
// ----------------------------------------

function createBackgroundPetal() {

  const petal =
    document.createElement("span");


  petal.className =
    "love-particle";


  petal.textContent =
    "✿";


  petal.style.left =
    Math.random() *
    window.innerWidth +
    "px";


  petal.style.top =
    window.innerHeight +
    "px";


  petal.style.setProperty(
    "--x",
    `${Math.random() * 160 - 80}px`
  );


  petal.style.setProperty(
    "--y",
    `${-window.innerHeight - 100}px`
  );


  petal.style.setProperty(
    "--rotation",
    `${Math.random() * 360}deg`
  );


  petal.style.animationDuration =
    `${2.5 + Math.random() * 2}s`;


  document.body.appendChild(
    petal
  );


  setTimeout(() => {

    petal.remove();

  }, 5000);

}


// New floating flower every 1.8 seconds

setInterval(
  createBackgroundPetal,
  1800
);