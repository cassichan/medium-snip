
// const newPromise = new Promise((resolve, reject) => {
//   const res = true;
//   if (res) {
//     resolve("Success!");
//   } else {
//     reject(Error("Error!"));
//   }
// });


// const washLaundry = new Promise((resolve, reject) => {
//   const res = true;
//   setTimeout(() => {
//     if (res) {
//       resolve("The laundry is clean!");
//     } else {
//       reject(Error("Error"));
//     }
//   }, 2000);
// });

// washLaundry.then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );


// function washLaundry() {
//   return new Promise((resolve, reject) => {
//     if (res) {
//       resolve("The laundry is clean!");
//     } else {
//       reject(Error("Error"));
//     }
//   });
// }


// const washLaundry = new Promise((resolve, reject) => {
//   const res = true;
//   if (res) {
//     resolve("The laundry is clean!");
//   } else {
//     reject(Error("Error"));
//   }
// });

// washLaundry.then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );


// const washLaundry = new Promise((reject, resolve) => {
//   const res = true;
//   if (res) {
//     resolve("The laundry is clean!");
//   } else {
//     reject(Error("Error"));
//   }
// });

// washLaundry.then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// const washLaundry = new Promise((resolve, reject) => {
//   resolve("The laundry is clean!");
//   reject("Error");
// });

// washLaundry.then((res) => {
//   console.log(res);
// });
// washLaundry.catch((err) => {
//   alert(err);
// });


// const washLaundry = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("The laundry is clean!");
//     reject("Error");
//   }, 2000);
// });

// washLaundry.then((res) => {
//   console.log(res);
// });
// washLaundry.catch((err) => {
//   alert(err);
// });


const washLaundry = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("The laundry is clean!");
    reject("Error");
  }, 2000);
});
console.log("I'm going to do laundry!");

washLaundry.then((res) => {
  console.log(res);
});
washLaundry.catch((err) => {
  alert(err);
});
console.log("The laundry isn't ready, I'm going to go take a nap.");