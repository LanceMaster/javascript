var button = $(".tab-button");

var content = $(".tab-content");

var buttonSize = $(".tab-button").length;

/**
 * var와 let의 차이 let으로 하면 정상작동
 * for문은 코드를 반복실행한다.
 */

for (let i = 0; i < buttonSize; i++) {
  button.eq(i).on("click", function () {
    button.removeClass("orange");
    button.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
  });
}

// button.eq(0).on("click", function () {
//   button.removeClass("orange");

//   button.eq(0).addClass("orange");

//   content.removeClass("show");

//   content.eq(0).addClass("show");
// });

// document
//   .querySelectorAll(".tab-button")[0]
//   .addEventListener("click", function () {
//     document.querySelectorAll(".tab-button").forEach(function (button) {
//       button.classList.remove("orange");
//     });
//     document.querySelectorAll(".tab-content").forEach(function (content) {
//       content.classList.remove("show");
//     });
//     document.querySelectorAll(".tab-button")[0].classList.add("orange");
//     document.querySelectorAll(".tab-content")[0].classList.add("show");
//   });

// document
//   .querySelectorAll(".tab-button")[1]
//   .addEventListener("click", function () {
//     document.querySelectorAll(".tab-button").forEach(function (button) {
//       button.classList.remove("orange");
//     });
//     document.querySelectorAll(".tab-content").forEach(function (content) {
//       content.classList.remove("show");
//     });
//     document.querySelectorAll(".tab-button")[1].classList.add("orange");
//     document.querySelectorAll(".tab-content")[1].classList.add("show");
//   });

// document
//   .querySelectorAll(".tab-button")[2]
//   .addEventListener("click", function () {
//     document.querySelectorAll(".tab-button").forEach(function (button) {
//       button.classList.remove("orange");
//     });
//     document.querySelectorAll(".tab-content").forEach(function (content) {
//       content.classList.remove("show");
//     });
//     document.querySelectorAll(".tab-button")[2].classList.add("orange");
//     document.querySelectorAll(".tab-content")[2].classList.add("show");
//   });
