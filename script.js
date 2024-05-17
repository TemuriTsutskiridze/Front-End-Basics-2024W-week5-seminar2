// const container = document.querySelector("main");
// let active = null;

// container.addEventListener("click", (event) => {
//   const questionDiv = event.target.closest(".question-div");
//   if (questionDiv) {
//     const answer = questionDiv.children[1];
//     const question = questionDiv.querySelector(".question");
//     const arrow = questionDiv.querySelector(".arrow");

//     if (active) {
//       active.children[1].style.display = "none";
//       active.querySelector(".question").style.fontWeight = "normal";
//       active.querySelector(".arrow").style.transform = "rotate(0deg)";
//     }

//     if (questionDiv === active) {
//       answer.style.display = "none";
//       question.style.fontWeight = "normal";
//       arrow.style.transform = "rotate(0deg)";
//       active = null;
//     } else {
//       answer.style.display = "block";
//       question.style.fontWeight = "bold";
//       arrow.style.transform = "rotate(180deg)";
//       active = questionDiv;
//     }
//   }
// });

const container = document.querySelector("main");
let active = null;

container.addEventListener("click", (event) => {
  const questionDiv = event.target.closest(".question-div");
  questionDiv.classList.toggle("active");

  if (questionDiv) {
    if (active) {
      active.classList.remove("active");
    }

    if (questionDiv === active) {
      active = null;
    } else {
      active = questionDiv;
    }
  }
});
