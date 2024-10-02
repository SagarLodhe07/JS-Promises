// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Async task");
//     resolve({ username: "Sagar", email: "xyz@gmail.com" });
//   }, 3000);
// });

// promiseOne
//   .then((user) => console.log("Promise resolve", user))
//   .catch((err) => console.log(err));

// const promiseSecond = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = false;

//     if (!err) {
//       resolve({ username: "Sagar", email: "xyz@gmail.com" });
//     } else {
//       reject("Error");
//     }
//   }, 4000);
// });

// promiseSecond
//   .then((data) => {
//     console.log(data);
//     return data.username;
//   })
//   .then((username) => console.log(username))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("Promises Completed");
//   });

// const promiseThird = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = true;
//     if (!err) {
//       resolve({ username: "Hitesh", password: "12345" });
//     } else {
//       reject("Error Something went wrong");
//     }
//   }, 4000);
// });

// async function consumedPromiseFive(params) {
//   try {
//     const res = await promiseThird;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumedPromiseFive();

async function getAllUser() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data.slice(0,4)));
  } catch (error) {
    console.log("Error while loading data");
  }
}

getAllUser();

// const promiseFour = new Promise((resolve, reject) => {});
