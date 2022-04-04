window.onscroll = function () {
  "use strict";
  if (window.scrollY > 50) {
    document.getElementById("header").style.backgroundColor = "white";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
};
document.getElementById("all").onclick = function () {
  let cards = document.querySelectorAll("#card");

  for (let card of cards) {
    let text = card.dataset.type;
    if (!text.toLowerCase().includes("all")) {
      card.style.display = "none";
    }
    else
    card.style.display = "flex";
  }
};
document.getElementById("datascience").onclick = function () {
  let cards = document.querySelectorAll("#card");

  for (let card of cards) {
    let text = card.dataset.type;
    if (!text.toLowerCase().includes("datascience")) {
      card.style.display = "none";
    }
    else
    card.style.display = "flex";
  }
};
document.getElementById("marketing").onclick = function () {
  let cards = document.querySelectorAll("#card");

  for (let card of cards) {
    let text = card.dataset.type;
    if (!text.toLowerCase().includes("marketing")) {
      card.style.display = "none";
    }
    else
    card.style.display = "flex";
  }
};
document.getElementById("lifestyle").onclick = function () {
  let cards = document.querySelectorAll("#card");

  for (let card of cards) {
    let text = card.dataset.type;
    if (!text.toLowerCase().includes("lifestyle")) {
      card.style.display = "none";
    }
    else
    card.style.display = "flex";
  }
};
document.getElementById("finance").onclick = function () {
  let cards = document.querySelectorAll("#card");

  for (let card of cards) {
    let text = card.dataset.type;
    if (!text.toLowerCase().includes("finance")) {
      card.style.display = "none";
    }
    else
    card.style.display = "flex";
    
  }
};
document.getElementById("menu").onclick = function(){
  console.log("click ")
  document.getElementById("modal").style.transform = "translateX(0%)"
}
document.getElementById("close").onclick = function(){
  console.log("c")
  document.getElementById("modal").style.transform = "translateX(100%)"
}