//  https://images.dog.ceo/breeds/mountain-swiss/n02107574_2377.jpg
let imgEle = document.querySelector(".dog");
// imgEle.src = "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2377.jpg";

let btnEle = document.querySelector(".btn");

let dogCont = document.querySelector(".dog-container");

let htmltext = `<img class="dog" src=${"https://images.dog.ceo/breeds/australian-kelpie/IMG_7387.jpg"} />`;

// dogCont.insertAdjacentHTML("beforeend", htmltext);

// let api =
// fetch("https://dog.ceo/api/breeds/image/rando")
// .then(
//   function(full)
//   {
//     console.log(full);
//   },
//   function(rej){

//   }
// )

btnEle.addEventListener("click", function (ev) {
  let api = fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (full) {
      // console.log(full);
      return full.json();
    })
    .then(function (full) {
      console.log(full.message);
      let htmltext = `<img class="dog" src=${full.message} />`;
      dogCont.insertAdjacentHTML("afterbegin", htmltext);
    });
});

// let api = fetch("https://dog.ceo/api/breeds/image/random")
//   .then(function (full) {
//     // console.log(full);
//     return full.json();
//   })
//   .then(function (full) {
//     console.log(full.message);
//   });

// console.log(api);
