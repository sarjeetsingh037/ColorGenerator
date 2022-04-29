const button = document.querySelector("button");
// const MAX = 255;
// const MIN = 0;
button.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  //   var col = "rgb(" + r + "," + g + "," + b + ")";
  //   var col = `rgb(${r},${g},${b})`;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

//Random number between two numbers
//   var r = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
//Random number between two numbers(MIN included , max excluded)
//   var r = Math.floor(Math.random() * (MAX - MIN)) + MIN;

// setInterval(() => {
//   let r = Math.floor(Math.random() * 255);
//   //   var r = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
//   //   console.log(r);
//   //   console.log(r1);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   //   var col = "rgb(" + r + "," + g + "," + b + ")";
//   //   var col = `rgb(${r},${g},${b})`;

//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// }, 1000);
